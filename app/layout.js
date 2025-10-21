import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vayro – AI-Powered Travel Planner",
  description:
    "Plan end-to-end trips effortlessly with Vayro — an AI-powered travel planner that combines flights, stays, and personalized itineraries in one place.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vayro – Smarter Travel, Simplified",
    description:
      "Vayro helps you build your perfect trip in seconds — from flights to day-by-day itineraries, powered by AI.",
    url: "https://vayro.org",
    siteName: "Vayro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vayro – AI-Powered Travel Planner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vayro – AI-Powered Travel Planner",
    description:
      "Your AI-powered travel planner for seamless trips — flights, stays, and itineraries all in one place.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://vayro.org"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Canonical Tag for SEO */}
        <link rel="canonical" href="https://vayro.org" />

        {/* ✅ Allow indexing (just in case robots blocked earlier) */}
        <meta name="robots" content="index, follow" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


