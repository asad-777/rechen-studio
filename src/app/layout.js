import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

const spaceMono = localFont({
  src: [
    {
      path: "../fonts/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-mono",
  display: "swap",
});


const smoochSans = localFont({
  src: "../fonts/SmoochSans-VariableFont_wght.ttf",
  variable: "--font-smooch",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://araasoft.com"),
  title: {
    default: "Araa Soft | Custom Web Development, Local SEO & AI Automation",
    template: "Araa Soft | Custom Web Development, Local SEO & AI Automation / %s",
  },
  description: "At Araa Soft, we design and engineer custom high-speed websites, Google Local SEO Map Pack ranking systems, and automated lead capture engines for businesses and contractors.",
  keywords: [
    "custom web development",
    "local SEO agency",
    "Google Map Pack optimization",
    "lead capture automation",
    "Next.js web apps",
    "trade business websites",
    "contractor marketing system",
    "Araa Soft"
  ],
  authors: [{ name: "Araa Soft" }],
  creator: "Araa Soft",
  publisher: "Araa Soft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logobg.jpg",
    shortcut: "/logobg.jpg",
    apple: "/logobg.jpg",
  },
  verification: {
    google: "P2-zTB2CZK9jhHpma5PWMzgzXNuN5YSbdQ6cyfQB8MU",
    other: {
      "msvalidate.01": "7F1D83AC8C1D6CB24F2D9EC3A78FFA9C",
    },
  },
  openGraph: {
    title: "Araa Soft | Custom Web Development, Local SEO & AI Automation",
    description: "At Araa Soft, we design and engineer custom high-speed websites, Google Local SEO Map Pack ranking systems, and automated lead capture engines for businesses and contractors.",
    url: "https://araasoft.com",
    siteName: "Araa Soft",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logobg.jpg",
        width: 1200,
        height: 630,
        alt: "Araa Soft - Custom Web Development & Local SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Araa Soft | Custom Web Development, Local SEO & AI Automation",
    description: "High-performance custom web applications, Google Local SEO rankings, and automated lead generation systems.",
    images: ["/logobg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${smoochSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yijsio16fl");
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-base-1a text-text-black selection:bg-primary-a selection:text-text-white transition-colors duration-300">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
