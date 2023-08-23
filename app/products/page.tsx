import { productSchema } from "@/mocks/products.mocks";
import { z } from "zod";

export const productsResponseSchema = z.array(productSchema);

export default async function ProductsPage() {
  const resp = await fetch("http://localhost:3000/api/products");
  const products = productsResponseSchema.parse(await resp.json());

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
