import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // If no token → block admin routes
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const user: any = verifyToken(token);

    // Only admin allowed
    if (request.nextUrl.pathname.startsWith("/admin") && user.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"], // protects everything under /admin
};