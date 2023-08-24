import { mockProducts } from "@/mocks/products.mocks";
import { NextResponse } from "next/server";
import { z } from "zod";

const paramsSchema = z.object({
  params: z.object({ productId: z.coerce.number() }),
});

type GetParams = z.infer<typeof paramsSchema>;

export async function GET(request: Request, { params }: GetParams) {
  const { params: parsedParams } = paramsSchema.parse({ params }); // Will throw error if productId is missing or not a string

  const matchingProduct = mockProducts.find(
    (product) => product.id === parsedParams.productId
  );

  if (!matchingProduct) {
    return new Response("Product not found", { status: 404 });
  }

  return NextResponse.json(matchingProduct);
}
