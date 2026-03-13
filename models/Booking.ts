import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
{
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true
  },

  email: {
    type: String,
    required: true
  },

  checkInDate: {
    type: Date,
    required: true
  },

  checkOutDate: {
    type: Date,
    required: true
  },

  paymentStatus: {
    type: String,
    enum: ["pending", "paid"],
    default: "pending"
  },

  stripeSessionId: String
},
{ timestamps: true }
);

export default mongoose.models.Booking ||
mongoose.model("Booking", BookingSchema);