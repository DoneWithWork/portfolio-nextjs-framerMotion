import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Intro from "@/components/intro";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoneWithWork | Portfolio",
  description: "portfolio website for DoneWithWork",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 bg-slate-50 text-gray-950`}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.5rem] rounded-full blur-[10rem]
         sm:w-[68.75rem] -z-10"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
         sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
         xl:left-[-15rem] 2xl:left-[-5rem] -z-10"
        ></div>
        <Header />

        {children}
      </body>
    </html>
  );
}
