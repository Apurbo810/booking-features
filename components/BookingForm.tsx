"use client";

import { useState, useEffect } from "react";
import { DateRange } from "react-day-picker";
import BookingCalendar from "./BookingCalendar";

export default function BookingForm({
  roomId,
  price,
}: {
  roomId: string;
  price: number;
}) {

  const [range, setRange] = useState<DateRange | undefined>();
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    fetch("/api/auth/me")
      .then(res => res.json())
      .then(data => {

        if (data.user) {
          setUserEmail(data.user.email);
          setEmail(data.user.email);
        }

      });

  }, []);

  const nights =
    range?.from && range?.to
      ? Math.ceil(
          (range.to.getTime() - range.from.getTime()) /
          (1000 * 60 * 60 * 24)
        )
      : 0;

  const total = nights * price;

  async function handleBooking() {

    if (!range?.from || !range?.to) {
      alert("Select booking dates");
      return;
    }

    if (!email) {
      alert("Enter email");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomId,
        email,
        checkInDate: range.from,
        checkOutDate: range.to,
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (!res.ok) {
      alert(data.message);
      return;
    }

    window.location.href = data.url;
  }

  return (
    <div>

      <BookingCalendar roomId={roomId} onSelect={setRange} />

      {nights > 0 && (
        <div className="alert alert-info mt-3 text-center">
          {nights} night(s) × ${price} = <strong>${total}</strong>
        </div>
      )}

      {/* Email input ONLY if user is NOT logged in */}
      {!userEmail && (
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}

      <button
        className="btn btn-primary mt-3 w-100"
        onClick={handleBooking}
        disabled={loading}
      >
        {loading ? "Redirecting..." : "Book Now"}
      </button>

    </div>
  );
}