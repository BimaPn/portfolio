import type { Metadata } from "next";
import { Inter, Open_Sans, Nunito, Cabin, Overpass, Be_Vietnam_Pro, Lato, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets:["latin"],weight:["400","500", "600", "700"]})
const lato = Poppins({ subsets:["latin"],weight:["400","500", "600", "700"]})
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
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
