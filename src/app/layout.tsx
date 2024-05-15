import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import { NextUIProviders } from "./providers/NextUIProvider";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
      <body className={dmSans.className}>
        <NextUIProviders>
          <div className="flex w-screen h-screen">
            <div className="border-r-1 flex flex-col items-left pt-2 bg-zinc-50 w-52">
              <Image
                className="self-center mb-10"
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
              />
              <NavBar />
            </div>
            <div className="flex-grow flex flex-col">
              <div className="border-b-1">
                <HeaderBar />
              </div>
              <div className="flex-grow h-[1px]">{children}</div>
            </div>
          </div>
        </NextUIProviders>
      </body>
    </html>
  );
}
