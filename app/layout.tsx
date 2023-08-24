import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabletics",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
  homeBanner1: React.ReactNode;
  homeBanner2: React.ReactNode;
};

export default function RootLayout({
  children,
  homeBanner1,
  homeBanner2,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {homeBanner1}
        {homeBanner2}
        {children}
      </body>
    </html>
  );
}
