import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Noctua Webworks | Web & App Development Agency",
  description: "Noctua Webworks is a modern web and app development agency delivering high-performance websites, custom apps, and digital solutions tailored to your business needs.",
  keywords: [
    "Noctua Webworks",
    "web development agency",
    "app development agency",
    "custom websites",
    "modern web design",
    "Shopify development",
    "WordPress development",
    "Next.js agency",
    "React development",
    "digital solutions",
  ],
  authors: [{ name: "Noctua Webworks Team", url: "https://noctuawebworks.com" }],
  creator: "Noctua Webworks",
  publisher: "Noctua Webworks",
  openGraph: {
    title: "Noctua Webworks | Web & App Development Agency",
    description:
      "Build fast, scalable websites and applications with Noctua Webworks. We specialize in Next.js, Shopify, WordPress, and more.",
    url: "https://noctuawebworks.com",
    siteName: "Noctua Webworks",
    images: [
      {
        url: "https://noctuawebworks.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noctua Webworks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} `}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
