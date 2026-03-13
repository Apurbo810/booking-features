import { connectDB } from "@/lib/mongodb";
import Room from "@/models/Room";
import cloudinary from "@/lib/cloudinary";
import path from "path";

export async function GET() {
  try {
    await connectDB();

    // remove rooms from database
    await Room.deleteMany({});

    // delete old images from Cloudinary folder
    const resources = await cloudinary.search
      .expression("folder:hotel/rooms")
      .max_results(50)
      .execute();

    const publicIds = resources.resources.map((r: any) => r.public_id);

    if (publicIds.length > 0) {
      await cloudinary.api.delete_resources(publicIds);
    }

    const roomData = [
      { name: "Deluxe Room", price: 120, description: "Comfortable deluxe room", file: "room1.jpg" },
      { name: "Family Suite", price: 200, description: "Large suite for families", file: "room2.jpg" },
      { name: "Single Room", price: 70, description: "Budget single room", file: "room3.jpg" },
      { name: "Luxury Suite", price: 250, description: "Premium luxury suite with sea view", file: "room4.jpg" },
      { name: "Business Room", price: 150, description: "Perfect for business travelers", file: "room5.jpg" },
      { name: "Economy Room", price: 60, description: "Affordable room for short stays", file: "room6.jpg" }
    ];

    const rooms = [];

    for (const room of roomData) {

      const imagePath = path.join(
        process.cwd(),
        "public/images",
        room.file
      );

      const upload = await cloudinary.uploader.upload(imagePath, {
        folder: "hotel/rooms",
        public_id: room.file.replace(".jpg", "")
      });

      const createdRoom = await Room.create({
        name: room.name,
        price: room.price,
        description: room.description,
        image: upload.secure_url
      });

      rooms.push(createdRoom);
    }

    return Response.json({
      message: "Rooms seeded with Cloudinary images",
      count: rooms.length
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      { message: "Seeding failed" },
      { status: 500 }
    );
  }
}