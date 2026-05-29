import type { Metadata } from "next";
import { AFF_FOOTER_BLURB, AFF_HERO_INTRO, AFF_TAGLINE } from "./aff-copy";

export const SITE_NAME = "African Founders Fund";
export const SITE_SHORT_NAME = "AFF";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aff.capital";

export const SITE_TITLE = `${SITE_NAME} | ${AFF_TAGLINE}`;

/** Meta description — used for SEO, Open Graph, and Twitter cards */
export const SITE_DESCRIPTION = `${AFF_HERO_INTRO} ${AFF_FOOTER_BLURB}`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "African Founders Fund",
    "AFF",
    "venture capital Africa",
    "African startups",
    "founder funding",
    "Africa investment",
    "seed funding",
    "Series A Africa",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};
