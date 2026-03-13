import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";

async function getRooms() {
  try {
    const res = await fetch("/api/rooms", {
      cache: "no-store",
    });

    if (!res.ok) return [];

    return res.json();
  } catch (error) {
    console.error("Rooms fetch error:", error);
    return [];
  }
}

export default async function Home() {
  const rooms = await getRooms();

  return (
    <div className="main-layout">

      <div className="container-fluid p-0">

        <Navbar />

        {/* Banner */}
        <section className="banner_main">
          <div id="myCarousel" className="carousel slide banner" data-ride="carousel">

            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/banner1.jpg" alt="First slide" />
              </div>

              <div className="carousel-item">
                <img src="/images/banner2.jpg" alt="Second slide" />
              </div>

              <div className="carousel-item">
                <img src="/images/banner3.jpg" alt="Third slide" />
              </div>
            </div>

          </div>
        </section>

        {/* About */}
        <div className="about">
          <div className="container-fluid">
            <div className="row">

              <div className="col-md-5">
                <div className="titlepage">
                  <h2>About Us</h2>
                  <p>
                    The passage experienced a surge in popularity during the
                    1960s when Letraset used it on their dry-transfer sheets.
                  </p>
                  <a className="read_more" href="#">Read More</a>
                </div>
              </div>

              <div className="col-md-7">
                <div className="about_img">
                  <figure>
                    <img src="/images/about.png" alt="#" />
                  </figure>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Rooms */}
        <div className="our_room">
          <div className="container">

            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Our Room</h2>
                  <p>Lorem Ipsum available, but the majority have suffered</p>
                </div>
              </div>
            </div>

            <div className="row">
              {rooms.slice(0, 6).map((room: any) => (
                <RoomCard
                  key={room._id}
                  id={room._id}
                  image={room.image}
                  name={room.name}
                  description={room.description}
                  price={room.price}
                />
              ))}
            </div>

          </div>
        </div>

        <Footer />

      </div>

    </div>
  );
}