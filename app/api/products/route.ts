import { mockProducts } from "@/mocks/products.mocks";
import { sleep } from "@/utils/sleep";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await sleep(2000);
  return NextResponse.json(mockProducts);
}
