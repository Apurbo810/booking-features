"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminPage() {

  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    fetch("/api/admin/bookings", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setBookings(data));

  }, []);

  return (
    <div className="main-layout">

      <Navbar />

      <div className="container mt-5 mb-5">

        <h2>Admin Booking Dashboard</h2>

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
                <td>{b.roomId}</td>
                <td>{new Date(b.checkInDate).toLocaleDateString()}</td>
                <td>{new Date(b.checkOutDate).toLocaleDateString()}</td>
                <td>{b.paymentStatus}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <Footer />

    </div>
  );
}