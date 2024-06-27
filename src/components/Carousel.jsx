import React from "react";
import { EmblaCarouselReact } from "embla-carousel-react";
import "embla-carousel-react/embla-carousel.css";

const Carousel = () => {
  const [emblaRef] = EmblaCarouselReact({ loop: true });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="/images/carousel-image-1.jpg" alt="Carousel Image 1" className="w-full h-auto" />
        </div>
        <div className="embla__slide">
          <img src="/images/carousel-image-2.jpg" alt="Carousel Image 2" className="w-full h-auto" />
        </div>
        <div className="embla__slide">
          <img src="/images/carousel-image-3.jpg" alt="Carousel Image 3" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;