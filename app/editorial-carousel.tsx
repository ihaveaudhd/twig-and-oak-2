"use client";

import Image from "next/image";
import { useRef } from "react";

type GalleryItem = {
  src: string;
  alt: string;
};

export function EditorialCarousel({ images }: { images: GalleryItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="editorial-carousel">
      <button className="editorial-carousel-arrow editorial-carousel-arrow--previous" type="button" onClick={() => move(-1)} aria-label="View previous family photograph">
        <span aria-hidden="true">←</span>
      </button>
      <div className="editorial-carousel-track" ref={trackRef}>
        {images.map((image, index) => (
          <figure className="editorial-carousel-slide" key={image.src}>
            <Image src={image.src} alt={image.alt} fill priority={index === 0} sizes="(max-width: 760px) 100vw, 1280px" />
          </figure>
        ))}
      </div>
      <button className="editorial-carousel-arrow editorial-carousel-arrow--next" type="button" onClick={() => move(1)} aria-label="View next family photograph">
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
