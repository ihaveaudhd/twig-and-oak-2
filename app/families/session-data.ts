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
    images: [
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10001.jpg", alt: "Young boy standing on a golden trail during a Walnut Creek family session" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10002.jpg", alt: "Three siblings together in a black-and-white portrait beneath the oak trees" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10003.jpg", alt: "Toddler girl smiling in a sunlit field during a family photography session" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10004.jpg", alt: "Toddler girl standing in golden grass beneath softly lit oak trees" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10005.jpg", alt: "Three siblings holding hands on a trail during golden hour" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10006.jpg", alt: "Father holding his smiling daughter in warm evening light" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10007.jpg", alt: "Wark family portrait in the golden Walnut Creek hills" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10008.jpg", alt: "Young boy smiling between his parents during a family portrait session" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10009.jpg", alt: "Toddler girl laughing in a close-up portrait in golden grass" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10010.jpg", alt: "Older boy smiling in a navy sweater during golden hour" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10011.jpg", alt: "Toddler girl walking toward the camera with her mother behind her" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10012.jpg", alt: "Wark family standing beneath a grand oak tree at sunset" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10013.jpg", alt: "Young boy laughing in a playful close-up portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10014.jpg", alt: "Wark family gathered beneath a sunlit oak tree" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10015.jpg", alt: "Father holding his smiling daughter in the golden hills" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10016.jpg", alt: "Wide Wark family portrait beneath an oak tree at golden hour" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10017.jpg", alt: "Father and older son holding hands in a Walnut Creek field" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10018.jpg", alt: "Father kneeling beside his younger son during a family session" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10019.jpg", alt: "Mother and older son together in the golden California hills" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10020.jpg", alt: "Mother holding her smiling young son in a golden field" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10021.jpg", alt: "Wark family walking together across the Walnut Creek hills" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10022.jpg", alt: "Father holding his two sons in a joyful black-and-white portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10023.jpg", alt: "Wark family holding hands on a path between oak trees" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10024.jpg", alt: "Mother walking with her toddler daughter in a black-and-white portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10025.jpg", alt: "Father laughing with his two sons during a relaxed family portrait" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10026.jpg", alt: "Three siblings playing together on a warm golden trail" },
      { src: "/walnut-creek-family-photography-oak-tree-sunset-10027.jpg", alt: "Mother walking hand in hand with her toddler daughter" },
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
