import { verifyToken } from "@/lib/jwt";

export async function GET(req: Request) {

  const cookie = req.headers.get("cookie");

  if (!cookie) return Response.json({ user: null });

  const token = cookie.split("token=")[1];

  if (!token) return Response.json({ user: null });

  try {

    const user = verifyToken(token);

    return Response.json({ user });

  } catch {

    return Response.json({ user: null });

  }
}