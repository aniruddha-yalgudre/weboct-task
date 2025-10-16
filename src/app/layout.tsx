import type { Metadata } from "next";
import { Playfair_Display, Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Presidential Park",
  description: "Premium plots for a premium life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
       
       >
        <Navbar/>
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}