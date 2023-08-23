"use client"
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
  images:string[]
}

export default function ImageCarousel({images}:Props) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
      let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlide);
    };
  
    const handlePrevSlide = () => {
      let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
      setCurrentSlide(newSlide);
    };

  return (

    <div className="relative w-1/2 h-1/4">
    <AiOutlineLeft
      onClick={handlePrevSlide}
      className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
    />
    <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
  <Swipe
    onSwipeLeft={handleNextSlide}
    onSwipeRight={handlePrevSlide}
    className="relative z-10 w-full h-full"
  >
    {images.map((img, index) => {
      if (index === currentSlide) {
        return (
          <div
            key={img}
            className="aspect-w-16 aspect-h-9 animate-fadeIn"
          >
            <Image
              src={img}
              alt={"None"}
              layout="fill"
              objectFit="contain"
              className="rounded border border-white"
            />
          </div>
        );
      }
    })}
  </Swipe>
</div>
    <AiOutlineRight
      onClick={handleNextSlide}
      className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
    />
    <div className="relative flex justify-center p-2">
    </div>

  </div>

 
  )
  }

  
