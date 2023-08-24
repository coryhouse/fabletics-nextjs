"use client";

import { CartContextProvider } from "@/context/cart-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
