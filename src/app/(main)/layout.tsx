import type { Metadata } from "next";
import "../globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Nextjs Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`antialiased overflow-x-hidden `}>
        <Navbar />
        <main className="min-h-screen">
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
