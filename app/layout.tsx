import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

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
        <Navbar brandText="GamerShop" items={[{ icon: <svg>test</svg>, text: "Cart", url: "#" }]} />
        {children}
      </body>
    </html>
  );
}
