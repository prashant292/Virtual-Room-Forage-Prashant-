import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import couch from "@/assets/couch.svg";
import Image from "next/image";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import UserInfo from "@/components/UserInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtual Room Forge",
  description: "Virtual Room Forge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={
            inter.className + " bg-[#17181c] flex flex-col min-h-screen"
          }
        >
          <header className="w-full">
            <div className="container border-b p-5 mx-auto flex items-center justify-between">
              <Link href={"/"} className="flex items-center gap-3">
                <Image width={50} height={50} src={couch} alt="couch logo" />
                <h3 className="text-white md:text-3xl text-md font-bold">
                  Virtual RF
                </h3>
              </Link>
              <UserInfo/> 
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}