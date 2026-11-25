import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const BRAND_NAME = "Kanchan Ayurvedic Upachar Kendra";

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} | Ayurvedic Wellness`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Explore Ayurvedic therapies, wellness treatments, and treatment packages at Kanchan Ayurvedic Upachar Kendra in Naya Thimi, Bhaktapur, Nepal.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
