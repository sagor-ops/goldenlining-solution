import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Goldenlining Solution | Premium Digital Agency – Web Design, SEO & Branding",
  description:
    "Goldenlining Solution is a premium digital agency delivering world-class websites, branding, SEO, Google Ads, ecommerce, and digital transformation. Trusted by 50+ businesses globally.",
  keywords: [
    "digital agency",
    "web design agency",
    "premium web development",
    "branding agency",
    "SEO agency",
    "Google Ads management",
    "ecommerce website design",
    "logo design",
    "digital transformation",
    "AI search visibility",
    "WordPress development",
    "content writing",
  ],
  authors: [{ name: "Goldenlining Solution" }],
  creator: "Goldenlining Solution",
  publisher: "Goldenlining Solution",
  metadataBase: new URL("https://goldenlining.com.au"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://goldenlining.com.au",
    siteName: "Goldenlining Solution",
    title: "Goldenlining Solution | Premium Digital Agency",
    description:
      "Premium websites, branding, SEO & digital strategy for ambitious businesses. 200+ projects delivered, 98% client satisfaction.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Goldenlining Solution" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldenlining Solution | Premium Digital Agency",
    description: "Premium websites, branding, SEO & digital strategy for ambitious businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#050d1f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Goldenlining Solution",
              description: "Premium digital agency specialising in web design, branding, SEO, and digital transformation.",
              url: "https://goldenlining.com.au",
              telephone: "+61-480684500",
              email: "goldenliningsolution@gmail.com",
              priceRange: "$$",
              serviceType: ["Web Design", "Branding", "SEO", "Google Ads", "Ecommerce", "Logo Design"],
              areaServed: "AU",
            }),
          }}
        />
      </head>
      <body className="text-white antialiased overflow-x-hidden" style={{ background: "#0d1f14" }}>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
