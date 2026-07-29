export type FamilySession = {
  slug: string;
  title: string;
  location: string;
  description: string;
  cover: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export const familySessions: FamilySession[] = [
  {
    slug: "graham-family-walnut-creek",
    title: "The Wark Family",
    location: "Walnut Creek · Golden hour",
    description: "A playful evening beneath the oak trees, filled with movement, laughter, and the kind of moments children make entirely their own.",
    cover: "/walnut-creek-family-photography-oak-tree-sunset-10007.jpg",
    images: [],
  },
  {
    slug: "welch-family-east-bay",
    title: "The Welch Family",
    location: "East Bay · Autumn light",
    description: "Warm light, a beloved family dog, and relaxed portraits that leave room for siblings to simply be themselves.",
    cover: "/east-bay-family-photography-welch-family-dog.jpg",
    images: [
      { src: "/east-bay-family-photography-welch-family-dog.jpg", alt: "Welch family portrait with their dog in warm autumn light" },
      { src: "/walnut-creek-family-photography-welch-siblings-black-white.jpg", alt: "Welch siblings sharing a quiet moment on an oak tree" },
    ],
  },
  {
    slug: "krueger-family-golden-hills",
    title: "The Krueger Family",
    location: "Walnut Creek · Golden hills",
    description: "An expansive California evening with a family of seven—easy connection, big energy, and everyone together in one beautiful frame.",
    cover: "/home-hero-krueger-expanded-2.jpg",
    images: [
      { src: "/home-hero-krueger-expanded-2.jpg", alt: "Krueger family walking together through the California hills" },
      { src: "/home-hero-krueger.jpg", alt: "Krueger family at golden hour in the East Bay" },
      { src: "/walnut-creek-family-photography-krueger-golden-hour.jpg", alt: "Krueger family walking through glowing grass at sunset" },
    ],
  },
  {
    slug: "silva-family-walnut-creek",
    title: "The Silva Family",
    location: "Walnut Creek · Sunlit oak trees",
    description: "Three brothers, one wide-open hillside, and a session built around motion instead of perfect stillness.",
    cover: "/walnut-creek-family-photography-silva-boys-running-01.jpg",
    images: [
      { src: "/walnut-creek-family-photography-silva-boys-running-01.jpg", alt: "Silva brothers running through a sunlit California field" },
      { src: "/walnut-creek-family-photography-silva-boys-running-02.jpg", alt: "Three brothers running together beneath a golden oak tree" },
    ],
  },
  {
    slug: "clements-family-east-bay",
    title: "The Clements Family",
    location: "East Bay · Spring hills",
    description: "Soft green hills, golden evening light, and a wonderfully real mix of closeness, curiosity, and play.",
    cover: "/walnut-creek-family-photography-clements-sunset-hills.jpg",
    images: [
      { src: "/walnut-creek-family-photography-clements-sunset-hills.jpg", alt: "Clements family together in the green East Bay hills" },
      { src: "/bay-area-family-photography-chambliss-california-hills.jpg", alt: "A family walking across the rolling California hills at sunset" },
      { src: "/east-bay-family-photography-thompson-sunset-session.jpg", alt: "A joyful family moving together through golden grass" },
    ],
  },
];

export function getFamilySession(slug: string) {
  return familySessions.find((session) => session.slug === slug);
}
