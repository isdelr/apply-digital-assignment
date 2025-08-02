import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import CartIcon from "@/public/icons/cart.svg";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GamerShop",
  description: "A frontend test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} flex flex-col h-dvh`}>
        <Navbar
          brandText="GamerShop"
          homeRoute="/"
          items={[
            {
              url: "/cart",
              icon: CartIcon,
              text: "Cart",
            },
          ]}
        />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
