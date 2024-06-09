import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
      <StarsBackground count={600}>{children}</StarsBackground> 
      <Footer />
    </>

  );
}
