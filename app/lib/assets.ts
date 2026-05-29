/** AFF brand icons (gold/navy PNGs) */
export const AFF_ICONS = {
  banking: "/assets/banking.png",
  payments: "/assets/payments.png",
  ventureCapital: "/assets/venture-capital.png",
  renewableEnergy: "/assets/renewable-energy.png",
  healthCare: "/assets/health-care.png",
  realEstate: "/assets/real-estate.png",
} as const;

/** Photography and section imagery */
export const AFF_PHOTOS = {
  about: "/assets/aboutaff.png",
  adeolu: "/assets/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
  markusVenture: "/assets/markus-winkler-44QtHj3fZDY-unsplash.jpg",
  stephen: "/assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg",
  towfiqu: "/assets/towfiqu-barbhuiya-joqWSI9u_XM-unsplash.jpg",
  markus: "/assets/markus-winkler-jF1CqFpE62k-unsplash.jpg",
  austin: "/assets/austin-distel-jpHw8ndwJ_Q-unsplash.jpg",
  jason: "/assets/jason-briscoe-amLfrL8LGls-unsplash.jpg",
  andreas: "/assets/andreas-brucker-C2Dyr5FhGPQ-unsplash.jpg",
  hector: "/assets/hector-j-rivas-1FxMET2U5dU-unsplash.jpg",
  fintech: "/assets/fintech.jpg",
  banking: "/assets/banking.jpg",
  education: "/assets/education.jpg",
  energy: "/assets/energy.jpg",
  digitalAfri: "/assets/digital-afri.png",
  hero1: "/assets/hero1.jpg",
  hero2: "/assets/hero2.jpg",
  hero3: "/assets/her03a.jpg",
  hero4: "/assets/hero4.jpg",
  hero5: "/assets/hero5.jpg",
} as const;

/** Home hero carousel */
export const HERO_CAROUSEL = [
  AFF_PHOTOS.hero1,
  AFF_PHOTOS.hero2,
  AFF_PHOTOS.hero3,
  AFF_PHOTOS.hero4,
  AFF_PHOTOS.hero5,
  AFF_PHOTOS.austin,
  AFF_PHOTOS.stephen,
  AFF_PHOTOS.markusVenture,
] as const;

export type AffIconKey = keyof typeof AFF_ICONS;
