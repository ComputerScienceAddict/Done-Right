import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { greatVibes, montserrat } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#08090c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://doneright-cleaning.example"),
  title: {
    default: "Done-Right Cleaning Services | Residential & Commercial",
    template: "%s | Done-Right Cleaning",
  },
  description:
    "Professional cleaning for homes and businesses. Flexible scheduling, trusted team, and results done right.",
  openGraph: {
    title: "Done-Right Cleaning Services",
    description: "Residential and commercial cleaning with attention to detail.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body
        className={`${montserrat.className} flex min-h-dvh flex-col bg-[#0d1017] text-[#f0ebe3] antialiased`}
      >
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
