import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infragility Labs | AI-Powered SEO & GEO Optimization",
  description: "Premium technical agency specializing in SEO and GEO optimization. AI-driven solutions for maximum search visibility.",
  keywords: ["SEO", "GEO optimization", "technical agency", "AI", "search engine optimization"],
  authors: [{ name: "Infragility Labs" }],
  creator: "Infragility Labs",
  publisher: "Infragility Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://infragility.vercel.app",
    title: "Infragility Labs | AI-Powered SEO & GEO Optimization",
    description: "Premium technical agency specializing in SEO and GEO optimization.",
    siteName: "Infragility Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Infragility Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infragility Labs | AI-Powered SEO & GEO Optimization",
    description: "Premium technical agency specializing in SEO and GEO optimization.",
    images: ["/og-image.png"],
    creator: "@infragility",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}