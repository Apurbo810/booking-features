import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { getUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {

    const user = await getUser(); // must await

    if (!user) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (user.role !== "admin") {
      return Response.json({ message: "Forbidden" }, { status: 403 });
    }

    await connectDB();

    const bookings = await Booking.find({})
      .populate("roomId", "name")
      .sort({ createdAt: -1 })
      .lean();

    return Response.json(bookings);

  } catch (error) {

    console.error("Admin bookings error:", error);

    return Response.json(
      { message: "Server error" },
      { status: 500 }
    );

  }
}