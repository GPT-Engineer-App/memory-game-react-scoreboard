import React from "react";
import { EmblaCarouselReact } from "embla-carousel-react";

const Carousel = () => {
  const [emblaRef] = EmblaCarouselReact({ loop: true });

  return (
    <>
      <style jsx>{`
        .embla {
          overflow: hidden;
        }

        .embla__container {
          display: flex;
        }

        .embla__slide {
          position: relative;
          min-width: 100%;
          padding: 0 10px;
        }

        .embla__slide img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
        }
      `}</style>
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
    </>
  );
};

export default Carousel;