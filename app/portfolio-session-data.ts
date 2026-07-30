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
      { src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1400&q=90", alt: "Newborn baby resting peacefully at home", orientation: "portrait" },
      { src: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1800&q=90", alt: "Tender newborn moment during an at-home session", orientation: "landscape" },
      { src: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=1400&q=90", alt: "New parents cuddling their newborn baby", orientation: "portrait" },
    ],
  },
];

export function getPortfolioSession(sessions: FamilySession[], slug: string) {
  return sessions.find((session) => session.slug === slug);
}
