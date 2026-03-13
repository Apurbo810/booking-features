import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: Request) {

  try {

    // read cookie header
    const cookieHeader = req.headers.get("cookie");

    if (!cookieHeader) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // extract token from cookie
    const token = cookieHeader
      .split("; ")
      .find(c => c.startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // verify token
    const user = verifyToken(token);

    if (user.role !== "admin") {
      return Response.json(
        { message: "Forbidden" },
        { status: 403 }
      );
    }

    await connectDB();

    const bookings = await Booking
      .find()
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