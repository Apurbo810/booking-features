import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

type UserToken = {
  id: string;
  email: string;
  role: string;
};

export async function GET() {
  try {
    // Next.js 15 cookies must be awaited
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = verifyToken(token) as UserToken;

    if (!user || user.role !== "admin") {
      return Response.json(
        { message: "Forbidden" },
        { status: 403 }
      );
    }

    await connectDB();

    const bookings = await Booking.find({})
      .populate({
        path: "roomId",
        select: "name",
      })
      .sort({ createdAt: -1 })
      .lean();

    // Convert Mongo ObjectId → string (important for Vercel)
    const safeBookings = bookings.map((b: any) => ({
      _id: b._id.toString(),
      email: b.email,
      roomId: b.roomId
        ? {
            _id: b.roomId._id.toString(),
            name: b.roomId.name,
          }
        : null,
      checkInDate: b.checkInDate,
      checkOutDate: b.checkOutDate,
      paymentStatus: b.paymentStatus,
      createdAt: b.createdAt,
    }));

    return Response.json(safeBookings);

  } catch (error) {
    console.error("Admin bookings error:", error);

    return Response.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
}