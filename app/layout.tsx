import type { Metadata } from "next";
import { Open_Sans, Bitter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransitionStart from "@/components/PageTransitionStart";

const openSans = Open_Sans({ subsets:["latin"],weight:["400","500", "600", "700"]})
const bitter = Bitter({ subsets:["latin"],weight:["400","500", "600", "700"],variable: "--font-bitter"})

export const metadata: Metadata = {
  title: "Bima PN",
  description: "Portfolio Created By Bima PN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${bitter.variable} bg-dark text-slate-200`}> 
        <PageTransitionStart> 
          <Navbar />
          {children}
        </PageTransitionStart>
      </body>
    </html>
  );
}
