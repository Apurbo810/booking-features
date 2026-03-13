  import { connectDB } from "@/lib/mongodb";
  import Room from "@/models/Room";
  import { uploadRoomImage } from "@/lib/cloudinary";

  export async function GET() {
    try {
      await connectDB();

      const rooms = await Room.find();

      return Response.json(rooms, { status: 200 });
    } catch (error) {
      return Response.json(
        { message: "Failed to fetch rooms" },
        { status: 500 }
      );
    }
  }

  export async function POST(req: Request) {
    try {
      await connectDB();

      const { name, price, description, image } = await req.json();

      // create room first
      const room = await Room.create({
        name,
        price,
        description,
      });

      // upload image to Cloudinary
      let imageUrl = "";

      if (image) {
        imageUrl = await uploadRoomImage(image, room._id.toString());
        room.image = imageUrl;
        await room.save();
      }

      return Response.json(room, { status: 201 });

    } catch (error) {
      return Response.json(
        { message: "Failed to create room" },
        { status: 500 }
      );
    }
  }