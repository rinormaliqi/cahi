import React from "react";
import Hero from "@/components/Home/Hero";
import Aboutus from "@/components/Home/AboutUs";
import Dedicated from "@/components/Home/Dedicated";
import Digital from "@/components/Home/Digital";
import Beliefs from "@/components/Home/Beliefs";
import Work from "@/components/Home/Work";
import Team from "@/components/Home/Team";
import Featured from "@/components/Home/Featured";
import Manage from "@/components/Home/Manage";
import FAQ from "@/components/Home/FAQ";
import ContactForm from "@/components/Home/Testimonials";
import Join from "@/components/Home/Joinus";
import Insta from "@/components/Home/Insta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cahi Pastrim Kimik - Shërbime Profesionale të Pastrimit në Kosovë",
  description: "Pastrim Kimik Cahi ofron shërbime profesionale të pastrimit kimik për shtëpi, zyra dhe objekte industriale në Prishtinë dhe në të gjithë Kosovën. Teknologji moderne, staf i kualifikuar, rezultate të garantuara.",
  keywords: [
    "pastrim kimik prishtinë",
    "pastrim tapicerish",
    "pastrim qilimash",
    "pastrim industrial",
    "shërbime pastrimi kosovë",
    "pastrim profesional",
    "cahi pastrim kimik",
    "pastrim fasadash",
    "pastrim makinash",
    "pastrim shtrojash",
    "pastrim objektesh",
    "kimikate pastrimi",
    "pastrim me avull",
    "shërbime higjienike"
  ],
  authors: [{ name: "Cahi Pastrim Kimik" }],
  creator: "Cahi Pastrim Kimik",
  publisher: "Cahi Pastrim Kimik",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sq_AL",
    url: "https://pastrim-kimik-cahi.com",
    title: "Cahi Pastrim Kimik - Shërbime Profesionale të Pastrimit në Kosovë",
    description: "Pastrim Kimik Cahi ofron shërbime profesionale të pastrimit kimik për shtëpi, zyra dhe objekte industriale në Prishtinë dhe në të gjithë Kosovën.",
    siteName: "Cahi Pastrim Kimik",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cahi Pastrim Kimik - Shërbime Pastrimi në Kosovë",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cahi Pastrim Kimik - Shërbime Profesionale të Pastrimit në Kosovë",
    description: "Pastrim Kimik Cahi ofron shërbime profesionale të pastrimit kimik për shtëpi, zyra dhe objekte industriale.",
    images: ["/twitter-image.jpg"],
    creator: "@cahipastrim",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: "https://pastrim-kimik-cahi.com",
    languages: {
      "sq-AL": "https://pastrim-kimik-cahi.com",
    },
  },
  category: "shërbime pastrimi",
};

// Komponenti JSON-LD për strukturizimin e të dhënave
const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://pastrim-kimik-cahi.com",
    "name": "Cahi Pastrim Kimik",
    "image": "https://pastrim-kimik-cahi.com/logo.jpg",
    "url": "https://pastrim-kimik-cahi.com",
    "telephone": "+38344893566",
    "email": "info@pastrim-kimik-cahi.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rr. Agim Ramadani",
      "addressLocality": "Prishtinë",
      "addressRegion": "Kosovë",
      "postalCode": "10000",
      "addressCountry": "XK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.6629,
      "longitude": 21.1655
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/cahipastrim",
      "https://instagram.com/cahipastrim"
    ],
    "priceRange": "$$",
    "serviceType": [
      "Pastrim Tapicerish",
      "Pastrim Qilimash",
      "Pastrim Industrial",
      "Pastrim Fasadash",
      "Pastrim Makinash",
      "Pastrim Shtrojash"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Kosovë",
      "containsPlace": [
        {
          "@type": "City",
          "name": "Prishtinë"
        },
        {
          "@type": "City",
          "name": "Prizren"
        },
        {
          "@type": "City",
          "name": "Pejë"
        },
        {
          "@type": "City",
          "name": "Gjakovë"
        },
        {
          "@type": "City",
          "name": "Mitrovicë"
        }
      ]
    },
    "description": "Shërbime profesionale të pastrimit kimik në Kosovë. Pastrim tapicerish, qilimash, fasadash, makinash dhe shërbime industriale.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Shërbimet tona",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pastrim Tapicerish"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pastrim Qilimash"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <h1 className="sr-only">Cahi Pastrim Kimik - Shërbime Profesionale të Pastrimit në Kosovë</h1>
        <Hero />
        <Beliefs />
        <Work />
        <FAQ />
        <ContactForm />
      </main>
    </>
  );
}