import Stripe from "stripe";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import Room from "@/models/Room";
import { sendBookingEmail } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: Request) {
  try {

    await connectDB();

    const { roomId, email, checkInDate, checkOutDate } = await req.json();

    // Validate input
    if (!roomId || !email || !checkInDate || !checkOutDate) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const room = await Room.findById(roomId);

    if (!room) {
      return Response.json(
        { message: "Room not found" },
        { status: 404 }
      );
    }

    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);

    if (start >= end) {
      return Response.json(
        { message: "Invalid booking dates" },
        { status: 400 }
      );
    }

    // Prevent double booking
    const existingBooking = await Booking.findOne({
      roomId,
      checkInDate: { $lt: end },
      checkOutDate: { $gt: start }
    });

    if (existingBooking) {
      return Response.json(
        { message: "Room already booked for selected dates" },
        { status: 400 }
      );
    }

    // Calculate nights
    const nights =
      Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    const totalPrice = nights * room.price;

    // Create booking
    const booking = await Booking.create({
      roomId,
      email,
      checkInDate: start,
      checkOutDate: end,
      paymentStatus: "pending",
    });

    // Send confirmation email
    await sendBookingEmail(
      email,
      room.name,
      start.toDateString(),
      end.toDateString(),
      totalPrice
    );

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: room.name,
              description: `${nights} night stay`,
            },
            unit_amount: totalPrice * 100,
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?bookingId=${booking._id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/rooms/${roomId}`,
    });

    // Save Stripe session ID
    booking.stripeSessionId = session.id;
    await booking.save();

    return Response.json({
      url: session.url
    });

  } catch (error) {

    console.error("Checkout error:", error);

    return Response.json(
      { message: "Checkout failed" },
      { status: 500 }
    );

  }
}