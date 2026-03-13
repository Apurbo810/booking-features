"use client";

import { useEffect, useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface Props {
  roomId: string;
  onSelect: (range: DateRange | undefined) => void;
}

export default function BookingCalendar({ roomId, onSelect }: Props) {

  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [range, setRange] = useState<DateRange | undefined>();

  useEffect(() => {

    fetch(`/api/bookings/${roomId}`)
      .then(res => res.json())
      .then(data => {

        const dates: Date[] = [];

        data.forEach((booking: any) => {

          const start = new Date(booking.checkInDate);
          const end = new Date(booking.checkOutDate);

          for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            dates.push(new Date(d));
          }

        });

        setBookedDates(dates);

      });

  }, [roomId]);

  function handleSelect(r: DateRange | undefined) {
    setRange(r);
    onSelect(r);
  }

  return (

    <div className="card p-3 shadow-sm">

      <DayPicker
        mode="range"
        selected={range}
        onSelect={handleSelect}
        disabled={bookedDates}
        showOutsideDays
      />

    </div>

  );
}