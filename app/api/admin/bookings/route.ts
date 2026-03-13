import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import Room from "@/models/Room";
import { verifyToken } from "@/lib/jwt";
import { cookies, headers } from "next/headers";

export const dynamic = "force-dynamic";

type UserToken = {
  id: string;
  email: string;
  role: string;
};

export async function GET() {
  try {

    const cookieStore = await cookies();
    let token = cookieStore.get("token")?.value;

    // fallback if cookie not detected
    if (!token) {
      const headerStore = await headers(); // ✅ must await
      const cookieHeader = headerStore.get("cookie");

      if (cookieHeader) {
        const match = cookieHeader.match(/token=([^;]+)/);
        if (match) {
          token = match[1];
        }
      }
    }

    if (!token) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = verifyToken(token) as UserToken;

    if (!user || user.role !== "admin") {
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
      { message: "Unauthorized" },
      { status: 401 }
    );

  }
}