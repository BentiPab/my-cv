import { NextRequest, NextResponse } from "next/server";
import { UpdateService } from "./services";
import { geolocation } from "@vercel/edge";

const sendVisitMessage = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const location = geolocation(req);
  await UpdateService.sendNewVisitMessage(pathname, location);
};

export async function middleware(request: NextRequest) {
  await sendVisitMessage(request);
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
