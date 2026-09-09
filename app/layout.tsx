import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const headlineFont = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
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
    "Full-stack & AI engineer portfolio — React, Node.js, PyTorch, and a Spider-Man-themed web-slinging scroll narrative.",
  openGraph: {
    title: "Kirsh Talreja — Your Friendly Neighborhood Engineer",
    description:
      "Full-stack & AI engineer portfolio — React, Node.js, PyTorch, and a Spider-Man-themed web-slinging scroll narrative.",
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
