import type { Viewport } from "next";
import type { ReactNode } from "react";

import { siteMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07101f" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-US" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
