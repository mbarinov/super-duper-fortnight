import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { Layout } from "@/lib/layouts/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"], // Regular
  display: "swap",
  variable: "--font-lato",
});

import "./globals.css";

export const metadata: Metadata = {
  title: "Soar: Front-End Developer Assessment Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
