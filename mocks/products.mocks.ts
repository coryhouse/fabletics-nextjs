import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
});

// We can use z.infer to get the type of the schema
export type Product = z.infer<typeof productSchema>;

export const mockProducts: Product[] = [
  { id: 1, name: "Nike Air Max 90", price: 125 },
  { id: 2, name: "Puma Suede", price: 75 },
  { id: 3, name: "Adidas Superstar", price: 100 },
];
