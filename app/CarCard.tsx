'use client'

import Image from "next/image";
import slugify from "slugify";

interface Props {
  car: {
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