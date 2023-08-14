import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import { Inventory } from '@mui/icons-material'
import CarCard from './CarCard'

const cars = [
  {
    name: "Porche 911 turbo" ,
    price: 30000,
    inventory: 1,
    image: "/data/911.png"
  },
  {
    name: "Laborghini Gallardo" ,
    price: 110000,
    inventory: 1,
    image: "/data/gallardo.png"
  },
  {
    name: "Nissan Skyline" ,
    price: 150000,
    inventory: 1,
    image: "/data/Skyline.png"
  }
]

export default function Home() {

  

  return (
    <main>
      <div className="bg-[url('/bg.jpg')]">
      <div className={"flex mb-10 overflow-hidden justify-center items-center"}>
        <h1 className="text-3xl text-green-500 pt-4">
          Deals of the day
        </h1>
      </div>
      
      <div className={"flex flex-col m-1 mb-10 overflow-hidden justify-center items-center"}  >
          {cars.map((car, index) => {
                return <CarCard car={car} key={car.name}/>
          })}
      </div>
      
      </div>
      {/* <div className="flex overflow-x-auto px-10 py-10">
        <div className="flex-none">
          <img className="h-48 w-96 object-cover" src="/car-temp1.png" />
        </div>
        <div className="flex-none">
          <img className="h-48 w-96 object-cover" src="/car-temp2.png" />
        </div>
        <div className="flex-none">
          <img className="h-48 w-96 object-cover" src="/car-temp3.jpeg" />
        </div>
        <div className="flex-none">
          <img className="h-48 w-96 object-cover" src="/car-temp1.png" />
        </div>
        <div className="flex-none">
          <img className="h-48 w-96 object-cover" src="/car-temp2.png" />
        </div>
        </div>*/}
      

      
    </main>
  )
}
