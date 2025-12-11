import { NextResponse } from "next/server";

export function proxy(request) {
  const response = NextResponse.next();
  response.headers.set("Last-Modified", new Date().toUTCString());
  return response;
}
