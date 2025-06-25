"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface AutoSliderProps {
  children: React.ReactNode;
}

const AutoSlider = ({ children }: AutoSliderProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {React.Children.map(children, (child, index) => (
          <div className="flex-shrink-0 w-full" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
