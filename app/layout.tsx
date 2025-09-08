import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Nimtion",
  description: "We deal with the busywork so your team can focus on impact."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}