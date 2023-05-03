import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// add req: NextRequest to like withClerkMiddleware(req: NextRequest) if above import is uncommented
export default withClerkMiddleware(() => {
  // console.log("middleware running");

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};
