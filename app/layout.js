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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Force canonical + robots (manual override) */}
        <link rel="canonical" href="https://vayro.org" />
        <meta name="robots" content="index, follow" />

        {/* Optional: Open Graph and Twitter fallback for redundancy */}
        <meta property="og:url" content="https://vayro.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vayro – Smarter Travel, Simplified" />
        <meta
          property="og:description"
          content="Vayro helps you build your perfect trip in seconds — from flights to day-by-day itineraries, powered by AI."
        />
        <meta property="og:image" content="https://vayro.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vayro – AI-Powered Travel Planner" />
        <meta
          name="twitter:description"
          content="Your AI-powered travel planner for seamless trips — flights, stays, and itineraries all in one place."
        />
        <meta name="twitter:image" content="https://vayro.org/og-image.png" />
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
