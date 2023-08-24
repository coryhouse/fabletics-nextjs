import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Redirect requests to /product-detail to /products
  if (request.nextUrl.pathname.startsWith("/product-detail")) {
    return NextResponse.redirect(new URL("/products", request.url));
  }

  // Show the same content on 2 URLs
  if (request.nextUrl.pathname.startsWith("/products2")) {
    return NextResponse.rewrite(new URL("/products", request.url));
  }

  // Set custom header on all requests.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-custom-header", "hello world");
}
