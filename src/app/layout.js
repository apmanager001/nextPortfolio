import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./homePage/header";
import { Toaster } from "react-hot-toast";
import Footer from "./homePage/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://robertfoley.dev"),
  title: {
    default: "Robert Foley - Full Stack Developer & Traveler",
    template: "%s | Robert Foley",
  },
  description:
    "Full-stack developer passionate about creating innovative web applications. Explore my portfolio, travel adventures, and photography from around the world.",
  keywords: [
    "Robert Foley",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "Portfolio",
    "Travel Photography",
    "Software Engineer",
  ],
  authors: [{ name: "Robert Foley" }],
  creator: "Robert Foley",
  publisher: "Robert Foley",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://robertfoley.dev",
    siteName: "Robert Foley",
    title: "Robert Foley - Full Stack Developer & Traveler",
    description:
      "Full-stack developer passionate about creating innovative web applications. Explore my portfolio, travel adventures, and photography from around the world.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Robert Foley - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Foley - Full Stack Developer & Traveler",
    description:
      "Full-stack developer passionate about creating innovative web applications. Explore my portfolio, travel adventures, and photography from around the world.",
    images: ["/profile.jpg"],
    creator: "@robertfoley",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://robertfoley.dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VM3VC7YZLK"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VM3VC7YZLK');`}
        </Script>

        {/* Structured Data - Person Schema */}
        <Script
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Robert Foley",
              jobTitle: "Full Stack Developer",
              description:
                "Full-stack developer passionate about creating innovative web applications",
              url: "https://robertfoley.dev",
              image: "https://robertfoley.dev/profile.jpg",
              sameAs: [
                "https://github.com/robertfoley",
                "https://linkedin.com/in/robertfoley",
                "https://twitter.com/robertfoley",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "JavaScript",
                "Node.js",
                "MongoDB",
                "Full Stack Development",
                "Web Development",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />

        {/* Structured Data - Website Schema */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Robert Foley",
              url: "https://robertfoley.dev",
              description: "Full-stack developer portfolio and travel blog",
              author: {
                "@type": "Person",
                name: "Robert Foley",
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://robertfoley.dev/blog?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Toaster
          position={"top-left"}
          toastOptions={{
            duration: 5000,
            style: {
              border: "2px solid #000",
              padding: "22px",
              color: "#713200",
              fontSize: "16px",
              fontWeight: "700",
            },
            success: {
              style: {
                background: "#90EE90",
              },
            },
            error: {
              style: {
                background: "#ff9494",
              },
            },
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
