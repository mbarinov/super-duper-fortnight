import type { Metadata } from "next";

import { Layout } from "@/lib/layouts/Layout";

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
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
