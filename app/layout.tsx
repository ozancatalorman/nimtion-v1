import type { Metadata } from "next";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nimtion",
  description: "We deal with the busywork so your team can focus on impact.",
  icons: {
    icon: "/favicon.ico",              // 32x32 ICO veya PNG
    apple: "/apple-touch-icon.png",    // iOS için opsiyonel
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}