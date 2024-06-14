import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  console.log("middleware request", request);

  const { pathname } = request.nextUrl;

  console.log("middleware pathname", pathname);

  const globalPaths = ["/signin", "/signup", "/forgot-password"];

  const matchesGlobalPath = globalPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (!matchesGlobalPath) {
    const token = await getToken({ req: request });

    console.log("middleware token", token);
  
    if (!token) {
      const url = new URL(`/signin`, request.url);
      url.searchParams.set("callbackUrl ", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
    if (pathname.startsWith("/admin") && token.role !== "admin") {
      const url = new URL(`/403`, request.url);
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}