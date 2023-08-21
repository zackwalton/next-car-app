import './globals.css'
import CarCard from './CarCard'
import Image from 'next/image'

const cars = [
  {
    id: 1,
    name: "Porche 911 turbo" ,
    price: 30000,
    inventory: 1,
    image: "/data/911.png"
  },
  {
    id:2,
    name: "Laborghini Gallardo" ,
    price: 110000,
    inventory: 1,
    image: "/data/gallardo.png"
  },
  {
    id:3,
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
      <div className="flex overflow-hidden justify-center items-center p-4">
        <Image className={""} src="/carthing.png" alt={"None"} height={500} width={500}/>
      </div>

      

      
      </div>



    </main>
  )
}


