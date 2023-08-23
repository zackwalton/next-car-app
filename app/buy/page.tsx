
import Image from "next/image";
import cars from '../cars/data.json';
import CarCard from "../CarCard";
import ImageCarousel from "../ImageCarousel";


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

export default function Buypage() {

  return (
      <div className="bg-[url('/bg.jpg')] ">
        <div className={"flex overflow-hidden justify-center items-center"}>
          <div>
          <h1 className="text-3xl text-green-500 pt-4">Deals of the day</h1>
          
          </div>
          
        </div>

      <div className={"flex flex-col m-1 mb-10 overflow-hidden justify-center items-center"}  >
          {cars.map((car,index) => {
            return (
              <ImageCarousel images={images}/>
            )
        })}
      </div>
    </div>
    
  )
}