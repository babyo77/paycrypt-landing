import type { Metadata } from "next";
import { aeonikPro } from "@/lib/fonts";
import "./globals.css";
import Analytics from "@/components/analytics";
export const metadata: Metadata = {
  title: "Paycrypt",
  description: "Next-Gen Payment Infrastructure",
  icons: {
    icon: "https://us-east-1.tixte.net/uploads/tanmay111-files.tixte.co/Untitled_design.png",
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
        className={`${aeonikPro.variable} font-sans antialiased tracking-tighter`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
