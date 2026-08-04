import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

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
  title: "Rechen Studio | Digital Architecture & Bespoke Web Apps",
  description: "Rechen Studio engineers high-performance web applications, custom websites, technical SEO architecture, and strategic branding for leading enterprises.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Rechen Studio | Digital Architecture & Bespoke Web Apps",
    description: "Rechen Studio engineers high-performance web applications, custom websites, technical SEO architecture, and strategic branding for leading enterprises.",
    images: [{ url: "/logo.png" }],
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${smoochSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-1a text-text-black selection:bg-primary-a selection:text-text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

