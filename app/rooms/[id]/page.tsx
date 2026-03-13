import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { connectDB } from "@/lib/mongodb";
import Room from "@/models/Room";
import mongoose from "mongoose";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return (
      <>
        <Navbar />
        <div className="container mt-5 text-center">
          <h2>Invalid room id</h2>
        </div>
        <Footer />
      </>
    );
  }

  const room = await Room.findById(id).lean();

  if (!room) {
    return (
      <>
        <Navbar />
        <div className="container mt-5 text-center">
          <h2>Room not found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="main-layout">

      <Navbar />

      <div className="container mt-5">

        <div className="row">

          {/* Room Image */}
          <div className="col-lg-6 col-12 mb-4">
            <img
              src={room.image}
              alt={room.name}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Room Info */}
          <div className="col-lg-6 col-12">

            <h2>{room.name}</h2>

            <p className="text-muted">
              {room.description}
            </p>

            <h4 className="text-primary mb-3">
              ${room.price} / night
            </h4>

            <div className="card p-3 shadow-sm">

              <h5 className="mb-3">Book This Room</h5>

              <BookingForm
                roomId={room._id.toString()}
                price={room.price}
              />

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}