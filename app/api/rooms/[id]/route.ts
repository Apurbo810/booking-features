import { connectDB } from "@/lib/mongodb";
import Room from "@/models/Room";
import mongoose from "mongoose";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  // validate id
  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return Response.json({ message: "Invalid room id" }, { status: 400 });
  }

  const room = await Room.findById(params.id);

  if (!room) {
    return Response.json({ message: "Room not found" }, { status: 404 });
  }

  return Response.json(room);
}