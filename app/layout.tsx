import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://berry-kurniawans.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Berry Kurniawan",
    template: "%s · Berry Kurniawan",
  },
  description:
    "Software Engineer focused on clean code and real impact. Building web apps with Next.js, TypeScript, and Tailwind.",
  keywords: [
    "Berry Kurniawan",
    "Software Engineer",
    "Frontend Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Laravel",
    "Indonesia",
  ],
  authors: [{ name: "Berry Kurniawan", url: BASE_URL }],
  creator: "Berry Kurniawan",
  openGraph: {
    title: "Berry Kurniawan",
    description:
      "Software Engineer focused on clean code and real impact. Building web apps with Next.js, TypeScript, and Tailwind.",
    url: BASE_URL,
    siteName: "Berry Kurniawan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Berry Kurniawan",
    description:
      "Software Engineer focused on clean code and real impact.",
    // creator: "@berrykwn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-48px-53px)]">{children}</main>
        <footer className="border-t border-black/[0.06] py-4">
          <div className="max-w-5xl mx-auto px-8 flex justify-between items-center">
            <span className="text-[11px] text-neutral-300 font-mono">
              © {new Date().getFullYear()} Berry Kurniawan
            </span>
            <span className="text-[11px] text-neutral-300">Made with care</span>
          </div>
        </footer>
      </body>
    </html>
  );
}