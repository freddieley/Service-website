import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bluo.co.uk"),
  title: {
    default: "Bluo — Web Design & Development",
    template: "%s — Bluo",
  },
  description:
    "Modern, mobile-first websites for local businesses. Designed, built and launched by Freddie Ley.",
  keywords: [
    "web design",
    "web development",
    "Southampton web design",
    "mobile-first websites",
    "small business websites",
    "Bluo",
  ],
  authors: [{ name: "Freddie Ley" }],
  creator: "Freddie Ley",
  openGraph: {
    title: "Bluo — Web Design & Development",
    description:
      "Modern, mobile-first websites for local businesses. Designed, built and launched by Freddie Ley.",
    type: "website",
    url: "https://bluo.co.uk",
    siteName: "Bluo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluo — Web Design & Development",
    description:
      "Modern, mobile-first websites for local businesses. Designed, built and launched by Freddie Ley.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
