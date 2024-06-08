import StarsBackground from "@/components/StarsBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Project",
  description: "Detail Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StarsBackground count={600}>{children}</StarsBackground> 
  );
}
