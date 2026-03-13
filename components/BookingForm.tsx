"use client";

import { useState } from "react";
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

    if (!res.ok) {
      alert(data.message);
      return;
    }

    window.location.href = data.url;
  }

  return (
    <div>

      <BookingCalendar roomId={roomId} onSelect={setRange} />

      {/* Total price */}
      {nights > 0 && (
        <div className="alert alert-info mt-3">
          {nights} night(s) × ${price} = <strong>${total}</strong>
        </div>
      )}

      {/* Email field */}
      <input
        type="email"
        placeholder="Your email"
        className="form-control mt-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="btn btn-primary mt-3 w-100"
        onClick={handleBooking}
      >
        Book Now
      </button>

    </div>
  );
}