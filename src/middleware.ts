import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supportedLanguages } from "@/lib/i18n/types";

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;

  // If the pathname starts with a supported language, let it through
  if (supportedLanguages.some(lang => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`)) {
    return NextResponse.next();
  }

  // If we're on the root path, redirect to the preferred language
  if (pathname === "/") {
    // Get the preferred language from the Accept-Language header
    const acceptLanguage = request.headers.get("accept-language") || "";
    const preferredLanguage = acceptLanguage
      .split(",")
      .map(lang => lang.split(";")[0].trim().toLowerCase())
      .find(lang => supportedLanguages.includes(lang as any)) || "en";

    // Redirect to the preferred language
    return NextResponse.redirect(new URL(`/${preferredLanguage}`, request.url));
  }

  // For all other paths, let them through
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    // Match all paths except static files, api routes, and _next
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}; 