import { connectDB } from "@/lib/mongodb";
import Room from "@/models/Room";

export async function GET() {
  try {
    await connectDB();

    // Remove old rooms
    await Room.deleteMany({});

    // Insert new rooms
    await Room.insertMany([
      {
        name: "Deluxe Room",
        price: 120,
        description: "Comfortable deluxe room",
        image: "/images/room1.jpg"
      },
      {
        name: "Family Suite",
        price: 200,
        description: "Large suite for families",
        image: "/images/room2.jpg"
      },
      {
        name: "Single Room",
        price: 70,
        description: "Budget single room",
        image: "/images/room3.jpg"
      },
      {
        name: "Luxury Suite",
        price: 250,
        description: "Premium luxury suite with sea view",
        image: "/images/room4.jpg"
      },
      {
        name: "Business Room",
        price: 150,
        description: "Perfect for business travelers",
        image: "/images/room5.jpg"
      },
      {
        name: "Economy Room",
        price: 60,
        description: "Affordable room for short stays",
        image: "/images/room6.jpg"
      }
    ]);

    return Response.json({ message: "Rooms seeded successfully" });

  } catch (error) {
    return Response.json(
      { message: "Seeding failed" },
      { status: 500 }
    );
  }
}