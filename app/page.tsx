import Image from 'next/image'
import Link from 'next/link'
import './globals.css'


export default function Home() {

  return (
    <main>
      <div className="flex overflow-x-auto">
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

      
    </main>
  )
}
