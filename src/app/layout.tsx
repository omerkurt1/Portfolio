import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ömer Faruk Kurt | Frontend & Full-Stack Developer",
  description:
    "Portfolio of Ömer Faruk Kurt, a Computer Engineering student and frontend/full-stack developer building production-ready web systems.",
  keywords: [
    "Ömer Faruk Kurt",
    "Frontend Developer",
    "Full-Stack Developer",
    "Computer Engineering",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Ömer Faruk Kurt" }],
  openGraph: {
    title: "Ömer Faruk Kurt | Frontend & Full-Stack Developer",
    description:
      "Selected work in logistics, civic technology, and production-ready web systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
