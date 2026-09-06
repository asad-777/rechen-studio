import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"

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
  title: "Araa Soft | Custom Websites, Google Business Profile & SEO Optimization with Ai integrations",
  description: "At AraaSoft we design and engineer custom websites, landing pages, automated lead capture funnels and Google local SEO & AI systems for businesses, brands and private individuals.",
  icons: {
    icon: "/hehelogo.png",
    shortcut: "/hehelogo.png",
    apple: "/hehelogo.png",
  },
  verification: {
    google: "P2-zTB2CZK9jhHpma5PWMzgzXNuN5YSbdQ6cyfQB8MU",
  },
  openGraph: {
    title: "Araa Soft | Custom Websites, Google Business Profile & SEO Optimization with Ai integrations",
    description: "At AraaSoft we design and engineer custom websites, landing pages, automated lead capture funnels and Google local SEO & AI systems for businesses, brands and private individuals.",
    images: [{ url: "/hehelogo.png" }],
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${smoochSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
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
