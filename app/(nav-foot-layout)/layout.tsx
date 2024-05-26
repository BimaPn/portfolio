import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
      <header className="fixed top-0 left-0 right-0 z-[10] py-4"> 
        <Navbar />
      </header>
      {children}
      <div className="w-full h-[89vh] overflow-hidden flex items-end -mt-12">
        <Footer />
      </div>

    </> 
  );
}
