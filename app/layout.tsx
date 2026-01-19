import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@frontend/layouts/header/Header";
import ThemesProvider from "@frontend/providers/themesProvider";
import Blob from "@frontend/components/bg/Blob";
import "@frontend/styles/globals.css";
import DarkGradient from "@frontend/components/bg/DarkGradient";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Sidhique",
    template: "Sidhique | %s",
  },
  description:
    "Building things with love. I am Sidhique, pursuing a career of being a software engineer.",
  manifest: "/manifest.json",
  keywords: [
    "Sidhique",
    "portfolio",
    "dev-portfolio",
    "developer",
    "jam Sidhique",
  ],
  authors: [
    { name: "I am Sidhique" },
    {
      name: "I am Sidhique",
      url: "https://github.com/sideque",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemesProvider>

          {/* 🔹 BACKGROUND (FIRST, BEHIND EVERYTHING) */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <Blob />
            <DarkGradient />
          </div>

          {/* 🔹 HEADER */}
          <Header />

          {/* 🔹 PAGE CONTENT */}
          <main className="relative z-10">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>

        </ThemesProvider>
      </body>
    </html>
  );
}
