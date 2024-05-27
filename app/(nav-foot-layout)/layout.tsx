import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
      {children}
      <div className="w-full h-[89vh] overflow-hidden flex items-end -mt-12">
        <Footer />
      </div>
    </> 
  );
}
