import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
      <header className="absolute top-0 left-0 right-0 z-50 py-4"> 
        <Navbar />
      </header>
      {children}
    </> 
  );
}
