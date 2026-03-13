import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(req: Request) {

  try {

    const user = getUserFromRequest(req);

    if (user.role !== "admin") {
      return Response.json(
        { message: "Forbidden" },
        { status: 403 }
      );
    }

    await connectDB();

    const bookings = await Booking.find().sort({ createdAt: -1 });

    return Response.json(bookings);

  } catch (error) {

    return Response.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
}