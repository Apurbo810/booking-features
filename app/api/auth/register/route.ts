import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {

  await connectDB();

  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return Response.json(
      { message: "Missing fields" },
      { status: 400 }
    );
  }

  const existing = await User.findOne({ email });

  if (existing) {
    return Response.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
  });

  return Response.json({
    message: "User registered",
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  });
}