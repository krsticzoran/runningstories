import type { Metadata } from "next";
import { Inter, Familjen_Grotesk, Instrument_Serif } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trkačke priče",
  description:
    "Od prvih kilometara do ličnih pobeda, iskustva i priče iz sveta trkača.",
  alternates: {
    canonical: "https://trkackeprice.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <head></head>
      <body
        className={`${inter.variable} ${familjenGrotesk.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
