import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="aspect-w-16 aspect-h-9">
            <img src="/images/carousel-image-1.jpg" alt="Carousel Image 1" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="embla__slide">
          <div className="aspect-w-16 aspect-h-9">
            <img src="/images/carousel-image-2.jpg" alt="Carousel Image 2" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="embla__slide">
          <div className="aspect-w-16 aspect-h-9">
            <img src="/images/carousel-image-3.jpg" alt="Carousel Image 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;