import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";

async function getRooms() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch rooms:", res.status);
      return [];
    }

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Rooms fetch error:", error);
    return [];
  }
}

export default async function RoomsPage() {
  const rooms = await getRooms();

  return (
    <div className="main-layout">
      <Navbar />

      {/* Page Header */}
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Our Room</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Room */}
      <div className="our_room">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <p className="margin_0">
                  Lorem Ipsum available, but the majority have suffered
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {rooms.length === 0 ? (
              <p className="text-center">No rooms available</p>
            ) : (
              rooms.map((room: any) => (
                <RoomCard
                  key={room._id}
                  id={room._id}
                  image={room.image}
                  name={room.name}
                  description={room.description}
                  price={room.price}
                />
              ))
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}