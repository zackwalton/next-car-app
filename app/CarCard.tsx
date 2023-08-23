'use client'

import Image from "next/image";
import slugify from "slugify";

interface Props {
  car: {
    id:number,
    name: string,
    price: number,
    inventory: number,
    image: string
  },
  
}

export default function CarCard({car}: Props) {
  if (!car) {
    throw Error('Missing CarCard car prop.')
  }
  return (
    <div className={"m-1 mb-10"}  >
    <a href={`/cars/${slugify(car.name).toLowerCase()}`}>
      <Image className={"border border-gray-300 rounded-lg"} src={car.image} alt={"None"} height={500} width={500}/>
    </a>
    </div>
  )
}
{/* <div className={"flex overflow-hidden justify-center items-center"}>
          <h1 className="text-3xl text-green-500 pt-4">Deals of the day</h1>
        </div>

      <div className={"flex flex-col m-1 mb-10 overflow-hidden justify-center items-center"}  >
          {cars.map((car, index) => {
            return (
              <CarCard car={car} key={index}/>
            )
        })}
      </div> */}