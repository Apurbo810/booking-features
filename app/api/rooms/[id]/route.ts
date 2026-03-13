import { connectDB } from "@/lib/mongodb";
import Room from "@/models/Room";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await context.params;

  // validate id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return Response.json({ message: "Invalid room id" }, { status: 400 });
  }

  const room = await Room.findById(id);

  if (!room) {
    return Response.json({ message: "Room not found" }, { status: 404 });
  }

  return Response.json(room);
}