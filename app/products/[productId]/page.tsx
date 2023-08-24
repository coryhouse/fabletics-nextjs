import { notFound } from "next/navigation";
import { Product } from "@/mocks/products.mocks";

type ProductDetailPageProps = {
  params: { productId: string };
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  if (params.productId === "0") notFound();

  const resp = await fetch(
    "http://localhost:3000/api/products/" + params.productId
  );

  const product = (await resp.json()) as Product;

  return (
    <>
      <h2>{product.name}</h2>${product.price}
    </>
  );
}
