import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const headlineFont = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-headline",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kirshtalreja.dev"),
  title: "Kirsh Talreja — Your Friendly Neighborhood Engineer",
  description:
    "Full-stack developer portfolio — React, Node.js, and a Spider-Man-themed web-slinging scroll narrative.",
  openGraph: {
    title: "Kirsh Talreja — Your Friendly Neighborhood Engineer",
    description:
      "Full-stack developer portfolio — React, Node.js, and a Spider-Man-themed web-slinging scroll narrative.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headlineFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
