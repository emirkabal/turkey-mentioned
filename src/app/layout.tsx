import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  style: "normal",
  preload: true,
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Turkey Mentioned",
  description:
    "Discover and share Turkey-Mentioned, the popular Turkish internet meme filled with Turkish flags and wolf howls. Explore iconic meme texts and share them with a click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark antialiased`}>{children}</body>
    </html>
  );
}
