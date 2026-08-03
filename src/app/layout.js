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

const josefinSans = localFont({
  src: "../fonts/JosefinSans-VariableFont_wght.ttf",
  variable: "--font-josefin",
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${josefinSans.variable} ${smoochSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-violet-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

