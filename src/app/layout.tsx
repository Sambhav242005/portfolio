import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden ">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
