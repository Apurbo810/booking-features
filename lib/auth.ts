import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

type UserToken = {
  id: string;
  email: string;
  role: string;
};

export async function getUser(): Promise<UserToken | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    const user = verifyToken(token) as UserToken;

    return user;
  } catch {
    return null;
  }
}