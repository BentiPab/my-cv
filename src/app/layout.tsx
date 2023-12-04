import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WebNavbar from "@/components/Navbar/WebNavbar";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pablo Bentivengo - Digital CV",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="root" style={{ zIndex: 1 }}>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
