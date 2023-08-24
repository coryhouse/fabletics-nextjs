"use client";
import { useCartContext } from "@/context/cart-context";

export default function AddToCart({ productId }: { productId: number }) {
  const { addToCart } = useCartContext();

  return (
    <button
      onClick={() => {
        addToCart(productId.toString());
      }}
    >
      Add to cart
    </button>
  );
}
