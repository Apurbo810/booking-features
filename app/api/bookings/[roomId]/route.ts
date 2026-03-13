import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ roomId: string }> }
) {

  const { roomId } = await params;

  await connectDB();

  const bookings = await Booking.find({
    roomId
  });

  return Response.json(bookings);
}