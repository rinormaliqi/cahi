import { Urbanist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { Metadata } from 'next'

const font = Urbanist({ subsets: ['latin'] })

// Metadata globale për të gjitha faqet
export const metadata: Metadata = {
  metadataBase: new URL('https://pastrim-kimik-cahi.com'),
  title: {
    default: 'Cahi Pastrim Kimik - Shërbime Profesionale të Pastrimit në Kosovë',
    template: '%s | Cahi Pastrim Kimik'
  },
  description: 'Pastrim Kimik Cahi ofron shërbime profesionale të pastrimit kimik për shtëpi, zyra dhe objekte industriale në Prishtinë dhe në të gjithë Kosovën. Teknologji moderne, staf i kualifikuar, rezultate të garantuara.',
  keywords: 'pastrim kimik prishtinë, pastrim tapicerish, pastrim qilimash, pastrim industrial, shërbime pastrimi kosovë, cahi pastrim kimik, pastrim fasadash, pastrim makinash',
  applicationName: 'Cahi Pastrim Kimik',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a192f' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    title: 'Cahi Pastrim Kimik',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/apple-startup.png',
    ],
  },
  other: {
    'msapplication-TileColor': '#1e40af',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='sq' suppressHydrationWarning>
      <head>
        {/* Favicon dhe manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Canonical URL - do të mbivendoset në faqe individuale */}
        <link rel="canonical" href="https://pastrim-kimik-cahi.com" />
        
        {/* Preconnect për performancë */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://pastrim-kimik-cahi.com/#organization",
              "name": "Cahi Pastrim Kimik",
              "url": "https://pastrim-kimik-cahi.com",
              "logo": "https://pastrim-kimik-cahi.com/logo.png",
              "description": "Shërbime profesionale të pastrimit kimik në Kosovë",
              "foundingDate": "2015",
              "founder": {
                "@type": "Person",
                "name": "Cahi"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+38344893566",
                "contactType": "customer service",
                "availableLanguage": ["sq", "en"],
                "areaServed": ["XK"],
                "email": "info@pastrim-kimik-cahi.com"
              },
              "sameAs": [
                "https://facebook.com/cahipastrim",
                "https://instagram.com/cahipastrim",
                "https://linkedin.com/company/cahi-pastrim-kimik"
              ]
            })
          }}
        />
        
        {/* Viewport meta tag për responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Mobile app meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Cahi Pastrim" />
        
        {/* PWA meta tags */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
        {/* Additional SEO meta tags për lokal biznes */}
        <meta name="geo.region" content="XK" />
        <meta name="geo.placename" content="Prishtinë, Kosovë" />
        <meta name="geo.position" content="42.6629;21.1655" />
        <meta name="ICBM" content="42.6629, 21.1655" />
        <meta name="country" content="Kosovë (XK)" />
        <meta name="language" content="sq" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Facebook Open Graph */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="og:site_name" content="Cahi Pastrim Kimik" />
        <meta property="og:locale" content="sq_AL" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:site" content="@cahipastrim" />
        <meta name="twitter:creator" content="@cahipastrim" />
        
        {/* Dublin Core Metadata */}
        <meta name="DC.title" content="Cahi Pastrim Kimik" />
        <meta name="DC.description" content="Shërbime profesionale të pastrimit kimik në Kosovë" />
        <meta name="DC.subject" content="pastrim kimik, pastrim, shërbime higjienike" />
        <meta name="DC.language" content="sq" />
        
        {/* Microsoft-specific tags */}
        <meta name="msvalidate.01" content="your-bing-webmaster-code" />
      </head>
      <body className={`${font.className} antialiased bg-white text-gray-900`}>
        <Aoscompo>
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <ScrollToTop />
        
        {/* Structured data for breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Kryefaqja",
                  "item": "https://pastrim-kimik-cahi.com"
                }
              ]
            })
          }}
        />
        
        {/* Local Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://pastrim-kimik-cahi.com/#localbusiness",
              "name": "Cahi Pastrim Kimik",
              "image": "https://pastrim-kimik-cahi.com/logo.jpg",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rr. Agim Ramadani",
                "addressLocality": "Prishtinë",
                "addressRegion": "Kosovë",
                "postalCode": "10000",
                "addressCountry": "XK"
              },
              "telephone": "+38344893566",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-15:00"
              ],
              "url": "https://pastrim-kimik-cahi.com"
            })
          }}
        />
      </body>
    </html>
  )
}