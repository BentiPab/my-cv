import { NextRequest, NextResponse } from "next/server";
import { UpdateService } from "./services";

const sendVisitMessage = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  let ip = req.ip ?? req.headers.get("x-real-ip");
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "Unknown";
  }
  await UpdateService.sendNewVisitMessage(pathname);
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
