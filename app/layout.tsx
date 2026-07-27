import type { Metadata } from "next";
import { DM_Sans, Italiana, Newsreader } from "next/font/google";
import "./globals.css";

const italiana = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-logo" });
const newsreader = Newsreader({ weight: "400", style: "italic", subsets: ["latin"], variable: "--font-logo-ampersand" });
const dmSans = DM_Sans({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-logo-label" });

export const metadata: Metadata = {
  title: { default: "Twig & Oak Photography", template: "%s | Twig & Oak Photography" },
  description: "Joyful, timeless family photography in Walnut Creek, California.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${italiana.variable} ${newsreader.variable} ${dmSans.variable}`}>{children}</body></html>;
}
