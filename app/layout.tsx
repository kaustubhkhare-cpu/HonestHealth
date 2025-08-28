import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"
import GlobalHeader from "@/components/global-header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Honest Health - Confidential Healthcare Solutions",
  description:
    "Science-backed health solutions with doctor-guided care and complete discretion. Private consultations for ED and weight management.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KJD3B6R6');`,
          }}
        />
        
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="gt6aureg961lxvv5s4pkoeygxnyp9v" />
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1907607630021659');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
          src="https://www.facebook.com/tr?id=1907607630021659&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJD3B6R6"
            height="0" 
            width="0" 
            style={{display:'none', visibility:'hidden'}}
          />
        </noscript>
        
        <GlobalHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
