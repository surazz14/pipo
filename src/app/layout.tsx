import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_Devanagari, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/config/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const deva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "700"],
  variable: "--font-deva",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Nepalese Restaurant Fremantle`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Nepalese kitchen in Fremantle`,
    description: site.description,
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${deva.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-pipo-cream font-sans text-pipo-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
