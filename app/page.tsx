import Image from 'next/image'
import Link from 'next/link'
import './globals.css'


export default function Home() {

  return (
    <main>
      <div className="bg-[url('/bg.jpg')]">
      <div className="flex h-screen w-full justify-center items-center ">
        <img className="w-1/2 h-auto"src="/logod-1.png" />
      </div>
      <div className="flex overflow-x-auto px-20 py-20">
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
        </div>
      </div>

      
    </main>
  )
}
