import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calraid Nutrition - Designing Your Nutrition Needs",
  description: "Calraid Nutrition - Designing Your Nutrition Needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="stcky">
          <Navbar />
        </nav>

        {children}
      </body>
    </html>
  );
}
