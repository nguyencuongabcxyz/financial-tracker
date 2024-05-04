import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import { NextUIProviders } from "./providers/NextUIProvider";
import CurrentNavItemProvider from "./providers/CurrentNavItemProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financial Tracker",
  description: "Track your finances with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProviders>
          <div className="flex w-screen h-screen">
            <div className="border-r-1 flex flex-col items-center pt-2">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <NavBar />
            </div>
            <div className="flex-grow flex flex-col">
              <CurrentNavItemProvider>
                <HeaderBar />
              </CurrentNavItemProvider>
              <div className="bg-gray-200 flex-grow p-3">
                <div className="bg-white rounded-md w-full h-full">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </NextUIProviders>
      </body>
    </html>
  );
}
