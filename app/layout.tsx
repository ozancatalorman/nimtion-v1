import type { Metadata } from "next";
import "./global.css";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nimtion Automation",
  description: "We deal with the busywork so you can focus on impact."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/cat.png" />
      </head>
      <body className="min-h-screen antialiased">
      {children}
      <Analytics />
      </body>
    </html>
  );
}