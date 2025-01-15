import type { Metadata } from "next";
import { Anton, Instrument_Serif } from "next/font/google";
import "@/app/globals.css";
import { DarkModeProvider } from "@/app/context/DarkModeContext";

import Header from "@/app/components/Header";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
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
        className={`${anton.variable} ${instrument.variable} antialiased light:bg-light light:text-dark`}
      >
        <DarkModeProvider>
          <Header />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}