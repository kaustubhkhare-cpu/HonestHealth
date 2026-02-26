// app/layout.tsx (or app/(root)/layout.tsx)
import type React from "react";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GlobalHeader from "@/components/global-header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Honest Health - Confidential Healthcare Solutions",
  description:
    "Science-backed health solutions with doctor-guided care and complete discretion. Private consultations for ED and weight management.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} antialiased`}>
      <head>
        {/* Facebook Domain Verification (keep this) */}
        <meta
          name="facebook-domain-verification"
          content="gt6aureg961lxvv5s4pkoeygxnyp9v"
        />

        {/* Google Tag Manager (script) */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KJD3B6R6');
          `}
        </Script>

        {/*
          ⛔️ Removed: Meta Pixel base + PageView.
          We're moving the Pixel into GTM (Option A).
          In GTM, add a "Custom HTML" tag with your Pixel base for All Pages,
          using Pixel ID: 1907607630021659, and fire PageView there.
        */}
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJD3B6R6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <GlobalHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
