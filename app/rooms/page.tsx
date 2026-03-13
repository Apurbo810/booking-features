"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";

export default function RoomsPage() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRooms() {
      try {
        const res = await fetch("/api/rooms");

        if (!res.ok) {
          console.error("Failed to fetch rooms:", res.status);
          setRooms([]);
        } else {
          const data = await res.json();
          setRooms(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Rooms fetch error:", error);
        setRooms([]);
      } finally {
        setLoading(false);
      }
    }

    getRooms();
  }, []);

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

      {/* Rooms */}
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
            {loading ? (
              <p className="text-center">Loading rooms...</p>
            ) : rooms.length === 0 ? (
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