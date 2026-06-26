import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/background/Aurora";
import BlueprintGrid from "@/components/background/BlueprintGrid";
import Footer from "@/components/footer";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Praveen K B | React Native Developer",
  description:
    "React Native Developer specializing in production mobile applications, performance optimization and modern full-stack development.",
  keywords: [
    "React Native",
    "React",
    "TypeScript",
    "Node.js",
    "Hono",
    "Cloudflare Workers",
    "Mobile Engineer",
  ],
  authors: [{ name: "Praveen K B" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} bg-black text-zinc-100 antialiased`}
      >
        {/* <MouseTracker /> */}
        <BlueprintGrid />

        <Aurora />

        <div className="mx-auto min-h-screen max-w-5xl px-6 md:px-12">
          <Navbar />
          <PageTransition>{children}</PageTransition>

          <Footer />
        </div>
      </body>
    </html>
  );
}
