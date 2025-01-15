import type { Metadata } from "next";
import { Anton, Instrument_Serif, Inter } from "next/font/google";
import "@/app/globals.css";

import Header from "@/app/components/Header";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${anton.variable} ${instrument.variable} ${inter.variable} antialiased `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
