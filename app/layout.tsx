import type { Metadata } from "next";
import "./global.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nimtion.com"),
  title: {
    default: "Nimtion Automation – Finance-first AI & Automation Solutions",
    template: "%s | Nimtion Automation",
  },
  description:
    "We don’t replace people — we replace busywork, so people can do what only humans can.",
  keywords: [
    "Nimtion Automation", "AI automation Istanbul", "finance automation", "AI workflows",
    "workflow optimization", "Process automation", "business automation", "automation solutions",
    "AI solutions", "data automation", "financial technology", "automation services", "AI consulting",
    "digital transformation", "efficiency improvement", "cost reduction", "time-saving solutions",
    "automation tools","custom automation", "automation strategy", "AI integration", "automation software",
  ],
  alternates: { canonical: "https://www.nimtion.com" },
  openGraph: {
    type: "website",
    url: "https://www.nimtion.com",
    siteName: "Nimtion Automation",
    title: "Nimtion Automation – Finance-first AI & Automation Solutions",
    description:
      "We don’t replace people — we replace busywork, so people can do what only humans can.",
    images: [
      {
        url: "/nimtionicon.png",
        width: 512,
        height: 512,
        alt: "Nimtion Automation logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimtion Automation – Finance-first AI & Web Solutions",
    description:
      "We don’t replace people — we replace busywork, so people can do what only humans can.",
    images: ["/nimtionicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
