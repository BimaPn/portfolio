import type { Metadata } from "next";
import { Open_Sans, Bitter } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets:["latin"],weight:["400","500", "600", "700"],display: "swap"})
const bitter = Bitter({ subsets:["latin"],weight:["400","500", "600", "700"],variable: "--font-bitter"})

export const metadata: Metadata = {
  title: "Bima Putra",
  description: "Portfolio Created By Bima Putra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${bitter.variable} bg-dark text-slate-200`}> 
      {children}
      </body>
    </html>
  );
}
