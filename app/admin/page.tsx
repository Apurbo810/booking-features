"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminPage() {

  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadBookings() {

      try {

        const res = await fetch("/api/admin/bookings", {
          credentials: "include"
        });

        const data = await res.json();

        if (Array.isArray(data)) {
          setBookings(data);
        }

      } catch (err) {
        console.error("Failed to load bookings");
      }

      setLoading(false);

    }

    loadBookings();

  }, []);

  return (
    <div className="main-layout">

      <Navbar />

      <div className="container mt-5 mb-5">

        <h2>Admin Booking Dashboard</h2>

        {loading && <p>Loading bookings...</p>}

        {!loading && (

          <table className="table table-bordered mt-4">

            <thead>
              <tr>
                <th>Email</th>
                <th>Room</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {bookings.map((b) => (

                  <tr key={b._id}>
                    <td>{b.email}</td>
                    <td>{b.roomId?.name}</td>
                    <td>{new Date(b.checkInDate).toLocaleDateString()}</td>
                    <td>{new Date(b.checkOutDate).toLocaleDateString()}</td>
                    <td>{b.paymentStatus || "pending"}</td>
                  </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

      <Footer />

    </div>
  );
}