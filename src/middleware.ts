import { NextRequest, NextResponse } from "next/server";
import { UpdateService } from "./services";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  await UpdateService.sendNewVisitMessage(pathname);
}

export const config = {
  matcher: [
    "/about-me",
    "/experiences",
    "/experiences/:path*",
    "/home",
    "/projects",
    "/projects/:path*",
  ],
};
