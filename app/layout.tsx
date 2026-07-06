import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Paolo Ignacio — Backend & AI Engineer",
  description:
    "Portfolio of Paolo Ignacio, a Backend & AI Engineer specializing in FastAPI, RAG systems, and scalable distributed backend services.",
  keywords: [
    "Paolo Ignacio",
    "Backend Engineer",
    "AI Engineer",
    "FastAPI",
    "RAG",
    "Python Developer",
  ],
  authors: [{ name: "Paolo Ignacio" }],
  openGraph: {
    title: "Paolo Ignacio — Backend & AI Engineer",
    description:
      "Recent BS Information Technology graduate specializing in backend development and AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body bg-ink text-text-hi antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
