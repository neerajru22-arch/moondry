import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  BadgeCheck,
  Clock,
  Recycle,
  ShieldCheck,
  Truck,
  Baby,
  Shirt,
  Sparkles,
  Phone,
  Building2,
  HandCoins,
  Leaf,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function MoondrySite() {
  const [annual, setAnnual] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const tiers = [
    {
      name: "Starter",
      tag: "Individuals",
      monthly: 799,
      yearly: 799 * 10, // 2 months free
      bullets: [
        "1 pickup/week",
        "Up to 20 kg/month",
        "48-hour turnaround",
        "Pickup + delivery included",
        "App/WhatsApp tracking",
      ],
    },
    {
      name: "Standard",
      tag: "Families",
      featured: true,
      monthly: 1299,
      yearly: 1299 * 10,
      bullets: [
        "2 pickups/week",
        "Up to 50 kg/month",
        "24-hour turnaround",
        "Free eco-detergent",
        "Priority support",
      ],
    },
    {
      name: "Pro",
      tag: "Power users",
      monthly: 1999,
      yearly: 1999 * 10,
      bullets: [
        "3 pickups/week",
        "Up to 90 kg/month",
        "Same-day express 2×/mo",
        "Dedicated concierge",
        "Damage protection",
      ],
    },
  ];

  // ---- SEO config ----
  const site = {
    name: "Moondry",
    url: "https://moondry.in", // TODO: set real domain
    description:
      "Subscription-based laundry service in India. Doorstep pickup, eco-friendly cleaning, ironing, and 24-hour delivery with add-ons for baby and intimates.",
    logo: "/logo.png", // TODO: set real path
    phone: "+91-0000000000", // TODO: set real phone
    sameAs: [
      "https://www.facebook.com/moondry",
      "https://www.instagram.com/moondry",
    ],
  };

  const faq = [
    {
      q: "What’s included in the subscription?",
      a: "Pickup, washing, drying, ironing, and delivery. Stain treatment and express are available as add-ons in some plans.",
    },
    {
      q: "How fast is delivery?",
      a: "Standard 24 hours. Express same-day is optional and subject to slot availability.",
    },
    {
      q: "How do you ensure hygiene?",
      a: "Loads are segregated by color and fabric. Baby and intimates use separate cycles with hypoallergenic chemistry.",
    },
    {
      q: "Is there a contract?",
      a: "Subscriptions renew monthly or annually. Pause or cancel anytime before the next billing date.",
    },
  ];

  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    url: site.url,
    image: site.logo,
    telephone: site.phone,
    description: site.description,
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
    sameAs: site.sameAs,
    areaServed: 'IN',
    openingHours: 'Mo-Su 08:00-21:00',
    makesOffer: tiers.map(t => ({
      '@type': 'Offer',
      name: `${t.name} plan`,
      price: t.monthly,
      priceCurrency: 'INR',
      category: 'LaundrySubscription',
      availability: 'https://schema.org/InStock'
    })),
  };

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    })),
  };

  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: site.logo,
    sameAs: site.sameAs,
  };

  const b2b = [
    { label: "Hotels", desc: "Housekeeping cycles and linens" },
    { label: "Hostels", desc: "High churn, daily returns" },
    { label: "Hospitals", desc: "Hygiene-first, segregated" },
    { label: "Catering", desc: "Stain treatment, bulk" },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Moondry — Subscription Laundry with 24‑hour Doorstep Pickup & Delivery</title>
        <meta name="description" content={site.description} />
        <link rel="canonical" href={site.url} />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#0f172a" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Moondry — Subscription Laundry" />
        <meta property="og:description" content={site.description} />
        <meta property="og:url" content={site.url} />
        <meta property="og:image" content={`${site.url}/og-cover.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moondry — Subscription Laundry" />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:image" content={`${site.url}/og-cover.jpg`} />
      </Helmet>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />

    </>,
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Head>
        <title>Moondry | Subscription Laundry Service with 24‑Hour Delivery</title>
        <meta
          name="description"
          content="Moondry is a subscription-based laundry service with 24‑hour pickup & delivery. Eco‑friendly, hygienic, and hassle‑free laundry for individuals, families, and businesses."
        />
        <meta property="og:title" content="Moondry | Subscription Laundry" />
        <meta
          property="og:description"
          content="Subscription laundry service with eco‑friendly cleaning and 24‑hour delivery. Plans for individuals, families, and B2B clients."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moondry.in" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moondry | Subscription Laundry" />
        <meta
          name="twitter:description"
          content="Eco‑friendly laundry with pickup & delivery in 24 hours. Subscribe today."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://moondry.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Moondry",
              description:
                "Subscription-based laundry service with eco-friendly cleaning and 24‑hour delivery.",
              url: "https://moondry.in",
              telephone: "+91XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "India",
              },
              priceRange: "₹₹",
              offers: tiers.map((t) => ({
                "@type": "Offer",
                name: `${t.name} Plan`,
                price: annual ? t.yearly : t.monthly,
                priceCurrency: "INR",
                url: "https://moondry.in#plans",
              })),
            }),
          }}
        />
      </Head>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
            <span className="font-semibold tracking-tight">Moondry</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-indigo-600">How it works</a>
            <a href="#plans" className="hover:text-indigo-600">Plans</a>
            <a href="#addons" className="hover:text-indigo-600">Add‑ons</a>
            <a href="#b2b" className="hover:text-indigo-600">B2B</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
          </nav>
          <button
            className="md:hidden p-2"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          {menuOpen && (
            <div className="absolute top-16 inset-x-0 bg-white border-t border-neutral-200 flex flex-col p-4 gap-4 text-sm md:hidden">
              <a href="#how" className="hover:text-indigo-600">How it works</a>
              <a href="#plans" className="hover:text-indigo-600">Plans</a>
              <a href="#addons" className="hover:text-indigo-600">Add‑ons</a>
              <a href="#b2b" className="hover:text-indigo-600">B2B</a>
              <a href="#faq" className="hover:text-indigo-600">FAQ</a>
            </div>
          )}
        </div>
      </header>

      {/* Rest of the site remains the same */}
    </div>
  );
}
