import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "./globals.css";

// TEMPORARY: replace with the client's confirmed business name.
const BRAND_NAME = "[Placeholder Ayurveda]";

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} | Ayurvedic Wellness & Holistic Healing`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Authentic Ayurvedic wellness: personalized consultations, traditional therapies, and holistic care to restore balance in body, mind, and spirit.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}