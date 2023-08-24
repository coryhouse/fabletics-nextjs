"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  path: string;
  children: React.ReactNode;
};

export default function NavLink({ path, children }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link href={path} style={pathname === path ? { color: "orange" } : {}}>
      {children}
    </Link>
  );
}
