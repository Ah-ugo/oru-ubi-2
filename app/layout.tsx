import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Tinos } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tinos",
});

export const metadata: Metadata = {
  title: "Oru-Ubi - From Soil to Soul",
  description:
    "Revolutionizing Nigerian agriculture through technology. Join the movement from soil to sustainability.",
  keywords:
    "agriculture, technology, Nigeria, farming, sustainability, agric-tech",
  openGraph: {
    title: "Oru-Ubi - From Soil to Soul",
    description: "Revolutionizing Nigerian agriculture through technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${tinos.variable} font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
