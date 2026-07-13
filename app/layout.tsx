import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauty Young — Minimal Fashion",
  description:
    "Beauty Young. Minimal, modern fashion for young women. New arrivals, everyday essentials and effortless style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
