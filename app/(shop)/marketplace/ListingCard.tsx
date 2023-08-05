'use client'

import Image, {ImageProps, StaticImageData} from "next/image";
import {NumericFormat} from 'react-number-format'

interface Props {
  car: {
    name: string,
    price: number,
    inventory: number
  },
  image: StaticImageData
}

const numberFormatter = Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0
    })

export default function ListingCard({car, image}: Props) {
  if (!car) {
    throw Error('Missing ListingCard car prop.')
  }

  return (
      <div className={"listing-card m-1 mb-10 overflow-hidden"} style={{maxWidth: "30%"}}>
        <a href={"#"}>
          <Image className={"border border-gray-300 rounded-lg"} src={image} alt={car.name} height={250}/>
          <p className={"text-xl font-semibold"}>{numberFormatter.format(car.price)}</p>
          <p className={"text-lg"}>{car.name}</p>
          <p className={"text-xs text-gray-400"}>
            {
              car.inventory < 3 ?
                  <span className={"text-red-400"}>{car.inventory} left in stock</span> :
                  car.inventory + " left in stock"}
          </p>
        </a>
      </div>
  )
}