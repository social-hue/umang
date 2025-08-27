import { NextResponse } from "next/server";

// export function middleware(request) {
//   const url = request.nextUrl.clone();
//   const hostname = request.headers.get("host");

//   // ✅ Allow everything on development environment
//   if (process.env.NODE_ENV === "development") {
//     return NextResponse.next();
//   }

//   // ✅ Allow everything for test domain (Vercel preview/staging)
//   if (hostname && hostname.includes("vercel.app")) {
//     return NextResponse.next();
//   }

//   // ✅ Allow system paths and assets
//   if (
//     url.pathname.startsWith("/_next") ||
//     url.pathname.startsWith("/api") ||
//     url.pathname === "/favicon.ico" ||
//     url.pathname === "/coming.png"
//   ) {
//     return NextResponse.next();
//   }

//   // ✅ Allow direct access to /comingsoon
//   if (url.pathname === "/comingsoon") {
//     return NextResponse.next();
//   }

//   // 🟥 Redirect ONLY for main domain www.umangliving.com
//   // if (hostname === "www.umangliving.com" && url.pathname === "/") {
//   //   url.pathname = "/comingsoon";
//   //   return NextResponse.rewrite(url);
//   // }
//   if (hostname === "www.umangliving.com") {
//     url.pathname = "/comingsoon";
//     return NextResponse.rewrite(url);
//   }

//   return NextResponse.next();
// }

// to live whole site for live on www.umagliving.com

export function middleware(request) {
  return NextResponse.next();
}
