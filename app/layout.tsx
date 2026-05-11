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

export const metadata: Metadata = {
  title: "Berry Kurniawan",
  description: "Berry Kurniawan's personal website",
  openGraph: {
    title: "Berry Kurniawan",
    description: "Software Engineer focused on clean code and real impact.",
    type: "website",
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

            <span className="text-[11px] text-neutral-300">
              Made with care
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}