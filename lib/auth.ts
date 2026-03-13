import jwt from "jsonwebtoken";

export function getUserFromRequest(req: Request) {

  const authHeader = req.headers.get("authorization");

  if (!authHeader) throw new Error("Unauthorized");

  const token = authHeader.split(" ")[1];

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

  return decoded;
}