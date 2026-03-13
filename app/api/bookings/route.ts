import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req: Request) {

  try {

    await connectDB();

    const { roomId, email, checkInDate, checkOutDate } = await req.json();

    if (!checkInDate || !checkOutDate) {
      return Response.json(
        { message: "Select valid booking dates" },
        { status: 400 }
      );
    }

    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);

    if (start >= end) {
      return Response.json(
        { message: "Invalid date selection" },
        { status: 400 }
      );
    }

    // check overlapping bookings
    const existingBooking = await Booking.findOne({
      roomId,
      $or: [
        {
          checkInDate: { $lte: end },
          checkOutDate: { $gte: start }
        }
      ]
    });

    if (existingBooking) {
      return Response.json(
        { message: "Room already booked for selected dates" },
        { status: 400 }
      );
    }

    const booking = await Booking.create({
      roomId,
      email,
      checkInDate: start,
      checkOutDate: end
    });

    return Response.json(booking, { status: 201 });

  } catch (error) {

    return Response.json(
      { message: "Booking failed" },
      { status: 500 }
    );
  }
}