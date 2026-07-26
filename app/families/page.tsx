import type { Metadata } from "next";
import { ServicePage } from "../service-page";

export const metadata: Metadata = {
  title: "Family Photographer in Walnut Creek & the East Bay",
  description: "Joyful, timeless family photography in Walnut Creek, Danville, Lafayette, Orinda, Moraga, San Ramon, Livermore, and throughout the San Francisco Bay Area.",
};

const familyGallery = [
  { src: "/bay-area-family-photography-calica-beach-sunset.jpg", alt: "Calica family holding hands with their dog at a San Francisco Bay Area beach sunset" },
  { src: "/walnut-creek-family-photography-watson-brothers-dog.jpg", alt: "Three brothers running with their dog through the East Bay hills" },
  { src: "/walnut-creek-family-photography-cohen-candid-black-white.jpg", alt: "Parents swinging their laughing son during a candid black-and-white family session" },
  { src: "/east-bay-family-photography-weddell-siblings.jpg", alt: "Young siblings hugging in a golden California field" },
  { src: "/walnut-creek-family-photography-graham-child-portrait.jpg", alt: "Smiling boy in a timeless black-and-white family portrait" },
  { src: "/east-bay-family-photographer-golden-hills-portrait.jpg", alt: "Family of five photographed in the golden East Bay hills" },
  { src: "/walnut-creek-family-photography-graham-dad-daughter.jpg", alt: "Father lifting his laughing daughter during a playful family session" },
  { src: "/walnut-creek-family-photography-krueger-golden-hour.jpg", alt: "Krueger family walking through golden grass at sunset in Walnut Creek" },
  { src: "/east-bay-family-photography-welch-family-dog.jpg", alt: "Welch family portrait with their dog beside a wooden bridge" },
  { src: "/walnut-creek-family-photography-welch-siblings-black-white.jpg", alt: "Brother and sister sitting on an oak tree in a black-and-white portrait" },
  { src: "/bay-area-family-photography-bucklew-garden-session.jpg", alt: "Bucklew family walking together through a lush California garden" },
  { src: "/walnut-creek-family-photography-clements-sunset-hills.jpg", alt: "Clements family with children running through green East Bay hills" },
  { src: "/east-bay-family-photography-fargas-oak-trees.jpg", alt: "Fargas family portrait beneath sunlit California oak trees" },
  { src: "/walnut-creek-family-photography-graham-sunset-silhouette.jpg", alt: "Family silhouetted beneath oak trees against a colorful California sunset" },
  { src: "/east-bay-family-photography-lien-child-candid.jpg", alt: "Smiling young girl captured in a joyful candid family photograph" },
  { src: "/walnut-creek-family-photography-williams-golden-hour.jpg", alt: "Williams family portrait in a golden Walnut Creek field" },
  { src: "/bay-area-family-photography-chambliss-california-hills.jpg", alt: "Chambliss family walking over the golden hills of the East Bay" },
  { src: "/walnut-creek-family-photography-silva-boys-running-01.jpg", alt: "Silva brothers running through a sunlit California field" },
  { src: "/walnut-creek-family-photography-silva-boys-running-02.jpg", alt: "Three brothers running together beneath a golden oak tree" },
  { src: "/east-bay-family-photography-thompson-sunset-session.jpg", alt: "Thompson family walking hand in hand through golden grass at sunset" },
  { src: "/bay-area-family-photography-haggerty-redwood-forest.jpg", alt: "Haggerty family photographed among towering Northern California redwoods" },
  { src: "/walnut-creek-family-photography-fleming-oak-tree.jpg", alt: "Fleming family beneath a grand oak tree at golden hour in Walnut Creek" },
];

export default function Families() {
  return <ServicePage eyebrow="Family photography · Walnut Creek & the Bay Area" title="Your people." italic="Exactly as they are." description="Modern, classic, joyful photographs—with enough direction to feel confident and enough play to feel like yourselves." hero="/home-hero-retort.jpg" heroPosition="50% 62%" splitHero editorialGallery detail="Bring the wiggly toddler, the camera-shy teen, the grandparents, and the pets. Families tell me they arrive worried about how everyone will behave and leave amazed that the session was actually fun." gallery={familyGallery} prompt="They’re growing right in front of you." />;
}
