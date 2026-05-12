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
  title: {
    default: "Goldenlining Solution | Web Design, SEO & Digital Agency — Australia",
    template: "%s | Goldenlining Solution",
  },
  description:
    "Goldenlining Solution — Australia's premium web design, SEO & digital marketing agency. We build high-performance websites, run Google Ads, and grow brands across Australia and globally. 600+ projects delivered.",
  keywords: [
    "web design agency Australia",
    "web design Adelaide",
    "SEO agency Australia",
    "digital marketing agency",
    "Google Ads management Australia",
    "ecommerce website design",
    "WordPress web design",
    "branding agency Australia",
    "logo design",
    "AI SEO visibility",
    "digital transformation agency",
    "small business website design",
    "premium web development",
    "Goldenlining Solution",
  ],
  authors: [{ name: "Goldenlining Solution", url: "https://goldenlining.com.au" }],
  creator: "Goldenlining Solution",
  publisher: "Goldenlining Solution",
  metadataBase: new URL("https://goldenlining.com.au"),
  alternates: { canonical: "https://goldenlining.com.au" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://goldenlining.com.au",
    siteName: "Goldenlining Solution",
    title: "Goldenlining Solution | Web Design, SEO & Digital Agency — Australia",
    description:
      "Premium web design, SEO, Google Ads & branding for ambitious businesses. 600+ projects. 98% satisfaction. Australia & Global.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Goldenlining Solution — Premium Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldenlining Solution | Web Design & SEO Agency",
    description: "Premium web design, SEO & digital marketing. 600+ projects delivered across Australia & globally.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: "your-google-search-console-code",
  },
  category: "Digital Agency",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0d1f14" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preload LCP hero image so browser fetches it immediately */}
        <link
          rel="preload"
          as="image"
          href="/hero-strip.jpg.png"
          fetchPriority="high"
        />
        {/* Google Fonts preconnect (next/font already does this, but belt & braces) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://goldenlining.com.au/#organization",
                  name: "Goldenlining Solution",
                  url: "https://goldenlining.com.au",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://goldenlining.com.au/logo.svg",
                    width: 200,
                    height: 60,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+61-480-684-500",
                    contactType: "customer service",
                    email: "goldenliningsolution@gmail.com",
                    availableLanguage: "English",
                    areaServed: ["AU", "GB", "NZ", "US"],
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/goldenlining-solution",
                    "https://twitter.com/goldenlining",
                  ],
                  foundingDate: "2017",
                  numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
                  areaServed: "Worldwide",
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://goldenlining.com.au/#localbusiness",
                  name: "Goldenlining Solution",
                  description: "Premium web design, SEO, Google Ads, branding and digital marketing agency based in Adelaide, Australia. Serving clients globally.",
                  url: "https://goldenlining.com.au",
                  telephone: "+61-480-684-500",
                  email: "goldenliningsolution@gmail.com",
                  priceRange: "$$",
                  image: "https://goldenlining.com.au/og-image.jpg",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Croydon Park",
                    addressLocality: "Adelaide",
                    addressRegion: "SA",
                    postalCode: "5008",
                    addressCountry: "AU",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -34.8921,
                    longitude: 138.5671,
                  },
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                    opens: "09:00",
                    closes: "18:00",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Digital Agency Services",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design & Development" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & AI Search Visibility" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ecommerce Development" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding & Logo Design" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "WordPress Development" } },
                    ],
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5.0",
                    reviewCount: "600",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://goldenlining.com.au/#website",
                  url: "https://goldenlining.com.au",
                  name: "Goldenlining Solution",
                  description: "Premium web design, SEO & digital agency — Australia & Global",
                  publisher: { "@id": "https://goldenlining.com.au/#organization" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://goldenlining.com.au/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                  inLanguage: "en-AU",
                },
              ],
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
