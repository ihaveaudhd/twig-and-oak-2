import type { FamilySession } from "./families/session-data";

export const seniorSessions: FamilySession[] = [
  {
    slug: "golden-hour-east-bay",
    title: "Golden Hour Senior Portraits",
    location: "East Bay · Golden hour",
    description: "An easygoing senior session with natural direction, open landscapes, and portraits full of genuine personality.",
    cover: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=90",
    images: [
      { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90", alt: "Senior portrait in warm natural light", orientation: "portrait" },
      { src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1800&q=90", alt: "Relaxed outdoor senior portrait", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=90", alt: "Natural senior portrait with a genuine expression", orientation: "portrait" },
    ],
  },
];

export const maternitySessions: FamilySession[] = [
  {
    slug: "east-bay-golden-hills",
    title: "Golden Hills Maternity",
    location: "East Bay · Sunset",
    description: "A warm maternity session with thoughtful posing, soft movement, and the quiet anticipation of a growing family.",
    cover: "https://images.unsplash.com/photo-1519994608014-9f12063b6c2e?auto=format&fit=crop&w=1800&q=90",
    images: [
      { src: "https://images.unsplash.com/photo-1519994608014-9f12063b6c2e?auto=format&fit=crop&w=1400&q=90", alt: "Expectant mother photographed in soft natural light", orientation: "portrait" },
      { src: "https://images.unsplash.com/photo-1535571393765-ea44927160be?auto=format&fit=crop&w=1800&q=90", alt: "Outdoor maternity portrait at golden hour", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?auto=format&fit=crop&w=1400&q=90", alt: "Relaxed maternity portrait celebrating a growing family", orientation: "portrait" },
    ],
  },
];

export const newbornSessions: FamilySession[] = [
  {
    slug: "at-home-bay-area",
    title: "A Quiet Morning at Home",
    location: "Bay Area · At home",
    description: "A patient, baby-led newborn session filled with tiny details, family connection, and room for real life to unfold.",
    cover: "/walnut-creek-newborn-photography-in-home-session-10618-2x3-fixed.jpg",
    images: [
      { src: "/newborn-at-home-10600.jpg", alt: "Tiny newborn feet during an at-home Walnut Creek photography session", orientation: "portrait" },
      { src: "/newborn-at-home-10601.jpg", alt: "Big brother smiling beside the nursery crib", orientation: "portrait" },
      { src: "/newborn-at-home-10602.jpg", alt: "Big brother peeking over the nursery crib", orientation: "landscape" },
      { src: "/newborn-at-home-10603.jpg", alt: "Newborn baby awake in her mother's arms", orientation: "landscape" },
      { src: "/newborn-at-home-10607.jpg", alt: "Father holding his smiling toddler in the nursery", orientation: "portrait" },
      { src: "/newborn-at-home-10613.jpg", alt: "Mother smiling while holding her sleeping newborn", orientation: "portrait" },
      { src: "/newborn-at-home-10610.jpg", alt: "Mother gently holding her awake newborn", orientation: "portrait" },
      { src: "/newborn-at-home-10621.jpg", alt: "Mother reading and laughing with her toddler at home", orientation: "portrait" },
      { src: "/newborn-at-home-10620.jpg", alt: "Newborn smiling softly while wrapped in pink", orientation: "portrait" },
      { src: "/newborn-at-home-10612.jpg", alt: "Mother and newborn portrait against a warm pink wall", orientation: "portrait" },
      { src: "/newborn-at-home-10611.jpg", alt: "Black-and-white portrait of mother cradling her sleeping newborn", orientation: "landscape" },
      { src: "/newborn-at-home-10619.jpg", alt: "Close portrait of a sleeping newborn wrapped in pink", orientation: "portrait" },
      { src: "/newborn-at-home-10609.jpg", alt: "Mother gazing at her newborn daughter in the nursery", orientation: "landscape" },
      { src: "/newborn-at-home-10608.jpg", alt: "Swaddled newborn looking toward her mother", orientation: "landscape" },
      { src: "/newborn-at-home-10618.jpg", alt: "Sleeping newborn with a blue bow in her mother's arms", orientation: "landscape" },
      { src: "/newborn-at-home-10604.jpg", alt: "Mother reading with her children in the nursery", orientation: "portrait" },
      { src: "/newborn-at-home-10617.jpg", alt: "Big brother smiling beside his sleeping baby sister", orientation: "landscape" },
      { src: "/newborn-at-home-10605.jpg", alt: "Family of four together in their newborn's nursery", orientation: "landscape" },
      { src: "/newborn-at-home-10614.jpg", alt: "Father holding his sleeping newborn daughter", orientation: "portrait" },
      { src: "/newborn-at-home-10615.jpg", alt: "Family portrait in the baby's floral nursery", orientation: "portrait" },
      { src: "/newborn-at-home-10616.jpg", alt: "Newborn and big brother sharing a quiet moment on the chair", orientation: "portrait" },
      { src: "/newborn-at-home-10606.jpg", alt: "Family laughing together during a relaxed newborn session", orientation: "landscape" },
      { src: "/walnut-creek-newborn-photography-in-home-session-10618-2x3-fixed.jpg", alt: "Sleeping newborn with a blue bow, vertical portrait", orientation: "portrait" },
    ],
  },
];

export function getPortfolioSession(sessions: FamilySession[], slug: string) {
  return sessions.find((session) => session.slug === slug);
}
