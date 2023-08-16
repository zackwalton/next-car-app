"use client"
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


const images = [
    "/data/Skyline.png",
    "/data/0b1ed260-eebc-4073-8066-f47348893fb1.jpeg",
    "/data/1d5bba4c-8f33-4abf-aaf1-1abad4625d50.jpeg",
    "/data/3a8bc0ba-eb03-41d0-8b33-f48377a05527.jpeg",
    "/data/5f942ec2-b563-4f90-bdd0-761fbe6f227b.jpeg",
    "/data/af06c3cf-0fbd-4390-81a7-fb4173ec04f6.jpeg",
    "/data/b3ef50ba-6ffd-4257-9b52-290fccf29dd9.jpeg",
    "/data/d3aac9f5-5b77-4c8c-91b8-f827c2167b5f.jpeg",
    "/data/IMG_2576.jpg"
]
export default function ImageCarousel() {

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

    <div className="relative">
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
              <Image
                key={img}
                src={img}
                alt={"None"}
                layout="fill"
                objectFit="contain"
                className="animate-fadeIn"
              />
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
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>

  </div>

 
  )
  }

  
