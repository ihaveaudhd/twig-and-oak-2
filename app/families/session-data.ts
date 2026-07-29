export type FamilySession = {
  slug: string;
  title: string;
  location: string;
  description: string;
  cover: string;
  images: {
    src: string;
    alt: string;
    orientation?: "portrait" | "landscape";
  }[];
};

export const familySessions: FamilySession[] = [
  {
    slug: "graham-family-walnut-creek",
    title: "The Wark Family",
    location: "Walnut Creek · Golden hour",
    description: "A playful evening beneath the oak trees, filled with movement, laughter, and the kind of moments children make entirely their own.",
    cover: "/cover-walnut-creek-family-photography-oak-tree-sunset-10021.jpg",
    images: [
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10010.jpg", alt: "Wark child smiling during a golden-hour family photography session", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10008.jpg", alt: "Wark child smiling between his parents at sunset", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10002.jpg", alt: "Three Wark siblings together in black and white", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10024.jpg", alt: "Wark mother and daughter walking together in black and white", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10020.jpg", alt: "Wark mother holding her son in the California hills", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10004.jpg", alt: "Wark daughter smiling beneath sunlit oak trees", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10025.jpg", alt: "Wark father sharing a playful moment with his sons", orientation: "landscape" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10015.jpg", alt: "Wark father holding his daughter at golden hour", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10001.jpg", alt: "Wark son standing on a golden hillside path", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10007.jpg", alt: "Wark family portrait beneath a glowing oak tree", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10021.jpg", alt: "Wark family walking hand in hand through golden grass", orientation: "landscape" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10018.jpg", alt: "Wark father and son portrait in the grass", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10013.jpg", alt: "Wark child laughing in a golden field", orientation: "landscape" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10011.jpg", alt: "Wark daughter walking toward the camera at sunset", orientation: "landscape" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10027.jpg", alt: "Wark mother walking hand in hand with her daughter", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10014.jpg", alt: "Wark family portrait among oak trees and golden grass", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10012.jpg", alt: "Wark family beneath a grand sunlit California oak tree", orientation: "landscape" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10003.jpg", alt: "Wark daughter laughing on a sunlit path", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10005.jpg", alt: "Three Wark siblings holding hands beneath the oak trees", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10023.jpg", alt: "Wark family holding hands on a California hillside", orientation: "landscape" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10019.jpg", alt: "Wark mother and son portrait at dusk", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10017.jpg", alt: "Wark father and son standing together in golden grass", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10006.jpg", alt: "Wark father holding his smiling daughter at sunset", orientation: "landscape" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10009.jpg", alt: "Close portrait of the Wark daughter smiling in the grass", orientation: "landscape" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10022.jpg", alt: "Wark father sharing a joyful moment with his sons in black and white", orientation: "landscape" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10026.jpg", alt: "Three Wark siblings playing together on a sunlit path", orientation: "portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10016.jpg", alt: "Wide Wark family portrait beneath a California oak tree", orientation: "landscape" },
    ],
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
