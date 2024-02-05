import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSidebar from "@app/components/Sidenav";
import Sidenav from "@app/components/MobileNav";
import MobileNav from "@app/components/MobileNav";
import Navbar from "@app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engineering Learning Hub",
  description: "Engineering learning hub, your gateway to a world of innovation and discovery in the realm of Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-white  background h- w-full   border-blue-700 ${inter.className}`}>
          {/* <Navbar /> */}
        <main className="flex ">
          <LeftSidebar />
          <MobileNav />
          <section className="px-10 py-10 w-full">{children}</section>
        </main>
      </body>
    </html>
  );
}
