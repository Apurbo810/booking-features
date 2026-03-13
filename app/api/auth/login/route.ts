import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {

  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });

  if (!user) {
    return Response.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return Response.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = signToken(user);

  const response = Response.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });

  response.headers.append(
    "Set-Cookie",
    `token=${token}; Path=/; HttpOnly; SameSite=Lax; ${
      process.env.NODE_ENV === "production" ? "Secure;" : ""
    } Max-Age=604800`
  );

  return response;
}