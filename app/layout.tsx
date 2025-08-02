import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import CartIcon from "@/assets/icons/cart.svg";

// Font defined in the Figma design
const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Navbar brandText="GamerShop" homeRoute="/" items={[{ icon: CartIcon, text: "Cart", url: "/cart" }]} />
        {children}
      </body>
    </html>
  );
}
