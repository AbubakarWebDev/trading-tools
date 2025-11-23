import type { Metadata } from "next";

import { inter } from "@/fonts";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Trading Tools",
  description: "Let's makes the traders life simple with these tools",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "icon",
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
