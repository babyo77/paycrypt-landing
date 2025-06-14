import type { Metadata } from "next";
import { aeonikPro } from "@/lib/fonts";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/analytics";
import { ReactLenis } from "lenis/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Paycrypt",
  description: "Payment rails for the new internet",
  icons: {
    icon: "https://us-east-1.tixte.net/uploads/tanmay111-files.tixte.co/Untitled_design.png",
  },
  openGraph: {
    images: [
      "https://us-east-1.tixte.net/uploads/tanmay111-files.tixte.co/gradii-1600x900.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://us-east-1.tixte.net/uploads/tanmay111-files.tixte.co/gradii-1600x900.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${spaceGrotesk.className} ${spaceGrotesk.variable} antialiased tracking-tighter`}
      >
        <ReactLenis root>{children}</ReactLenis>
        <Analytics />
      </body>
    </html>
  );
}
