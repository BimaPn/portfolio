import FollowCursor from "@/components/FollowCursor";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
    <FollowCursor />
      <header className="absolute top-0 left-0 right-0 z-50 py-4"> 
        <Navbar />
      </header>
      {children}
    </> 
  );
}
