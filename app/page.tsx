"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

export default function Home() {
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [button3Clicked, setButton3Clicked] = useState(false);

  const handleButtonClick = (buttonNumber: number) => {
    switch (buttonNumber) {
      case 1:
        setButton1Clicked(true);
        break;
      case 2:
        setButton2Clicked(true);
        break;
      case 3:
        setButton3Clicked(true);
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <div className="bg-[url('/bg.jpg')] flex justify-center items-center h-screen">
        <div className="relative" style={{ width: '500px', height: '500px' }}>
         
          <Image src="/carthing.png" alt="None" layout="fill" />
          
          <Link href="buy">
              <button
                className={`absolute left-1/4 bottom-12 text-white py-1 transition-colors duration-300 w-20 h-1/6 rounded`}
                onClick={() => handleButtonClick(1)}
              >
              </button>
          </Link>
          
          <button
            className={`absolute left-1/2 transform -translate-x-1/2 bottom-12 text-white py-1 transition-colors duration-300 w-20 h-1/6 rounded`}
            onClick={() => handleButtonClick(2)}
          >
         
          </button>
          <button
            className={`absolute right-1/4 bottom-2 text-white py-1 transition-colors duration-300 w-20 h-1/4 rounded`}
            onClick={() => handleButtonClick(3)}
          >
          </button>
        </div>
      </div>
    </main>
  );
}

