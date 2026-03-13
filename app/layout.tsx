import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Cocktail o'clock | Mobilny bar na Twoje wydarzenie",
  description: "Jestem Kamila i chętnie wpadnę rozkręcić twoją imprezkę",
  keywords: [
    "mobilny bar",
    "barman na wesele",
    "catering koktajlowy",
    "drink bar",
    "wesele",
    "urodziny",
    "eventy firmowe",
    "Polska",
  ],
  authors: [{ name: "Kamila" }],

  // 1. Add Open Graph metadata (for Facebook, LinkedIn, Discord, etc.)
  openGraph: {
    title: "Cocktail o'clock | Mobilny bar na Twoje wydarzenie",
    description: "Jestem Kamila i chętnie wpadnę rozkręcić twoją imprezkę!",
    url: "https://cocktail-o-clock.vercel.app/",
    siteName: "Cocktail o'clock",
    images: [
      {
        url: "/images/kamila.jpeg",
        width: 1200,
        height: 630,
        alt: "Kamila z mobilnego baru Cocktail o'clock",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cocktail o'clock | Mobilny bar na Twoje wydarzenie",
    description: "Jestem Kamila i chętnie wpadnę rozkręcić twoją imprezkę",
    images: ["/images/kamila.jpeg"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
