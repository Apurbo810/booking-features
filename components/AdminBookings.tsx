"use client";

import { useEffect, useState } from "react";

export default function AdminBookings() {

  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadBookings() {

      const res = await fetch("/api/admin/bookings", {
        credentials: "include"
      });

      if (!res.ok) {
        window.location.href = "/login";
        return;
      }

      const data = await res.json();
      setBookings(data);
      setLoading(false);
    }

    loadBookings();

  }, []);

  if (loading) return <p>Loading bookings...</p>;

  return (
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
  );
}