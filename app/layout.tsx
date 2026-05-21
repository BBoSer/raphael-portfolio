import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raphaelo.lol"),
  title: {
    default: "Raphael König — Developer & Founder of NyxHosting",
    template: "%s | Raphael König",
  },
  description:
    "Raphael König (born 12 August 2012, Germany) is a self-taught developer and founder of NyxHosting, a free Minecraft server hosting company. At 13 years old he builds web applications, manages Linux servers, and creates software used by hundreds of people.",
  keywords: [
    "Raphael König",
    "Raphael Koenig",
    "raphaelkoenig",
    "Raphael König developer",
    "Raphael König NyxHosting",
    "Raphael König Germany",
    "Raphael König programmer",
    "Raphael König 2012",
    "NyxHosting",
    "NyxHosting founder",
    "free Minecraft hosting",
    "young developer Germany",
    "teenage programmer",
    "teenage developer",
    "youngest developer",
    "13 year old developer",
    "self-taught developer",
    "Minecraft hosting free",
    "web developer Germany",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "henryline Discord",
  ],
  authors: [{ name: "Raphael König", url: "https://raphaelo.lol" }],
  creator: "Raphael König",
  publisher: "Raphael König",
  category: "Technology",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://raphaelo.lol",
    siteName: "Raphael König",
    title: "Raphael König — Developer & Founder of NyxHosting",
    description:
      "Raphael König is a 13-year-old self-taught developer from Germany and founder of NyxHosting, a free Minecraft hosting company. Passionate about building software, web apps, and server infrastructure.",
    firstName: "Raphael",
    lastName: "König",
    username: "raphaelkoenig",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphael König — Developer & Founder of NyxHosting",
    description:
      "13-year-old self-taught developer from Germany. Founder of NyxHosting (free Minecraft hosting). Building things that matter.",
    creator: "@raphaelkoenig",
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
  alternates: {
    canonical: "https://raphaelo.lol",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://raphaelo.lol/#person",
  name: "Raphael König",
  alternateName: ["Raphael Koenig", "raphaelkoenig", "henryline"],
  givenName: "Raphael",
  familyName: "König",
  birthDate: "2012-08-12",
  gender: "Male",
  nationality: "German",
  description:
    "Raphael König is a self-taught software developer and entrepreneur born on 12 August 2012 in Germany. At 13 years old, he is the founder and sole developer of NyxHosting, a free Minecraft server hosting company. He specialises in web development, server infrastructure, and backend systems.",
  url: "https://raphaelo.lol",
  image: "https://raphaelo.lol/raphael-photo.png",
  jobTitle: "Software Developer & Founder",
  knowsAbout: [
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Linux",
    "Docker",
    "Nginx",
    "Server Management",
    "Minecraft",
    "Game Server Hosting",
    "REST APIs",
    "Git",
    "Vercel",
    "HTML",
    "CSS",
  ],
  knowsLanguage: ["German", "English"],
  sameAs: [
    "https://github.com/raphaelkoenig",
    "https://raphaelo.lol",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "personal",
      availableLanguage: ["German", "English"],
    },
  ],
  founder: {
    "@type": "Organization",
    "@id": "https://raphaelo.lol/#nyxhosting",
    name: "NyxHosting",
    description:
      "NyxHosting is a free Minecraft server hosting company founded by Raphael König. It provides free game server hosting to players who cannot afford paid services.",
    url: "https://nyxhosting.net",
    foundingDate: "2024",
    founder: { "@id": "https://raphaelo.lol/#person" },
    serviceType: "Game Server Hosting",
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Free Minecraft server hosting",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://raphaelo.lol/#website",
  url: "https://raphaelo.lol",
  name: "Raphael König — Portfolio",
  description:
    "Official portfolio website of Raphael König, self-taught developer and founder of NyxHosting.",
  author: { "@id": "https://raphaelo.lol/#person" },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://raphaelo.lol/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://raphaelo.lol/#webpage",
  url: "https://raphaelo.lol",
  name: "Raphael König — Developer & Founder of NyxHosting",
  description:
    "Portfolio and profile page of Raphael König, a 13-year-old self-taught developer and founder of NyxHosting from Germany.",
  isPartOf: { "@id": "https://raphaelo.lol/#website" },
  about: { "@id": "https://raphaelo.lol/#person" },
  mainEntity: { "@id": "https://raphaelo.lol/#person" },
  dateModified: new Date().toISOString(),
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://raphaelo.lol",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <meta name="author" content="Raphael König" />
        <meta name="subject" content="Portfolio of Raphael König, developer and founder of NyxHosting" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <link rel="canonical" href="https://raphaelo.lol" />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
