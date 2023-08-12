'use client'

import Image from "next/image";

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
    <div className={"flex m-1 mb-10 overflow-hidden justify-center items-center"}  >
    <a href={"#"}>
      <Image className={"border border-gray-300 rounded-lg"} src={car.image} alt={"None"} height={500} width={500}/>
    </a>
    </div>
  )
}