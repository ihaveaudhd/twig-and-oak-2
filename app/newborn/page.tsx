import { newbornSessions } from "../portfolio-session-data";
import { ServicePage } from "../service-page";

export default function Newborn() {
  return (
    <ServicePage
      eyebrow="Newborn photography · At home in the Bay Area"
      title="Tiny details."
      italic="Plenty of time."
      description="Relaxed two-to-three-hour sessions with room for feeding, soothing, siblings, and real life."
      hero="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=2000&q=90"
      detail="Newborn sessions happen at your baby’s pace. I’m patient through the cries, gentle with your little one, and equally comfortable wrangling an older sibling, a dog, and two tired new parents."
      gallery={[
        {
          src: "/images/newborn/top-gallery/cohen-family-newborn.jpg",
          alt: "Family gathered around their sleeping newborn at home",
        },
        {
          src: "/images/newborn/top-gallery/cohen-family-bed-newborn.jpg",
          alt: "Parents and an older sibling admiring their newborn on the bed",
        },
        {
          src: "/images/newborn/top-gallery/mother-nursing-newborn.jpg",
          alt: "Mother nursing her newborn in a softly lit nursery",
        },
        {
          src: "/images/newborn/top-gallery/newborn-blue-blanket.jpg",
          alt: "Sleeping newborn wrapped in a soft blue blanket",
        },
        {
          src: "/images/newborn/top-gallery/wark-family-newborn.jpg",
          alt: "Family portrait with a newborn and siblings by large windows",
        },
      ]}
      prompt="They’ll never be this little again."
      splitHero
      editorialGallery
      editorialTitle="Tiny details,"
      editorialItalic="held close."
      editorialQuote="Baby-led, unhurried, and beautifully real."
      sessions={newbornSessions}
      sessionBasePath="/newborn"
      sessionHeadingItalic="Newborn Sessions"
      sessionIntro="See how a complete newborn session makes room for feeding, soothing, siblings, and the quiet details you will want to remember."
      sessionImageAlt={(session) =>
        `${session.title} newborn photography session`
      }
    />
  );
}
