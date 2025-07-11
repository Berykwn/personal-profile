import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import SocialMediaLink from "./components/social-media-link";

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
    description: "Junior Software Engineer & IT Developer at PT Priamanaya Energi",
    type: "website",
    // url: "https://berrykurniawan.com",
    // images: ["/profile-picture-4.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <header className="top-0">
            <Navbar />
          </header>
    
          {/* Left social icons */}
          <SocialMediaLink />

          {/* Main content in the center */}
          <main className="flex-1 flex flex-col items-center justify-center">
            {children}
          </main>

          {/* Footer */}
          <footer className="py-4 px-4 text-center text-sm text-gray-500">
            Made with <span className="text-black">❤️</span> and ☕
          </footer>
        </div>
      </body>
    </html>
  );
}
