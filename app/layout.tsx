import type { Metadata } from "next";
import { Nunito, Cabin } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets:["latin"],weight:["400","500", "600", "700"]})
const cabin = Cabin({ subsets:["latin"],weight:["400","500", "600", "700"]})

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
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
