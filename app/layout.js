import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "Plan end-to-end trips effortlessly with Vayro — AI-powered travel planner combining flights, stays, and personalized itineraries in one place.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vayro – Smarter Travel, Simplified",
    description:
      "Vayro helps you build your perfect trip in seconds — from flights to day-by-day itineraries, powered by AI.",
    url: "https://www.vayro.org",
    siteName: "Vayro",
    images: [
      {
        url: "/og-image.png", // Optional: add og-image.png in your /public folder
        width: 1200,
        height: 630,
        alt: "Vayro – AI-Powered Travel Planner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
