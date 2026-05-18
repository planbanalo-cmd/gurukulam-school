import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

import NextTopLoader from "nextjs-toploader"; // ✅ BETTER LOADER

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gurukulam School",
  description: "Best education platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">

        {/* ✅ PREMIUM PAGE LOADER */}
        <NextTopLoader
          color="#E4CC6F"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #E4CC6F,0 0 5px #E4CC6F"
        />

        {/* ✅ NAVBAR */}
        <Navbar />

        {/* ✅ MAIN CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* ✅ FOOTER */}
        <Footer />
      </body>
    </html>
  );
}