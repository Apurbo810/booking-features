import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
{
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },

  status: {
    type: String,
    enum: ["available", "booked"],
    default: "available"
  },

  description: String,
  image: String
},
{ timestamps: true }
);

export default mongoose.models.Room ||
mongoose.model("Room", RoomSchema);