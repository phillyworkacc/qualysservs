import "@/styles/globals.css"
import "@/styles/site.css"
import type { Metadata } from "next";
import { ManropeFont, OutfitFont } from "./fonts";
import { ModalProvider } from "@/components/Modal/ModalContext";
import { Toaster } from "sonner";
import ChatBot from "@/components/ChatBot/ChatBot";

export const metadata: Metadata = {
  title: {
    default: "Qualys Services Ltd | Data Center, IT & Software Solutions",
    template: "%s | Qualys Services Ltd",
  },
  description:
    "Qualys Services Ltd is a tech company providing innovative Data Center Consulting, IT Services, Software Development, and Training to help businesses grow and operate smarter.",
  keywords: [
    "Qualys Services Ltd",
    "IT services Glasgow",
    "data center consulting UK",
    "software development Scotland",
    "business training services",
    "digital solutions UK",
  ],
  authors: [{ name: "Qualys Services Ltd" }],
  creator: "Qualys Services Ltd",
  publisher: "Qualys Services Ltd",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://qualysservs.co.uk",
    siteName: "Qualys Services Ltd",
    title: "Qualys Services Ltd | Data Center, IT & Software Solutions",
    description:
      "Based in Glasgow, Qualys Services Ltd delivers Data Center Consulting, IT services, Software Development and Training to help businesses innovate and succeed online.",  
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualys Services Ltd",
    description:
      "Glasgow tech solutions — IT services, data center consulting, software dev & training for business growth.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
      <html lang="en">
        <body className={ManropeFont.className}>
          {children}
          <Toaster richColors position="top-center" />
        </body>
      </html>
    </ModalProvider>
  );
}
