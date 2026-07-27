import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Twig & Oak Photography", template: "%s | Twig & Oak Photography" },
  description: "Joyful, timeless family photography in Walnut Creek, California.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
