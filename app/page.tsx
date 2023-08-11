import Image from 'next/image'
import Link from 'next/link'
import './globals.css'


export default function Home() {

  return (
    <main>
      <div className="bg-[url('/bg.jpg')]">
      <div className={"flex mb-10 overflow-hidden justify-center items-center"}>
        <h1 className="text-3xl text-green-500 pt-4">
          Deals of the day
        </h1>
      </div>
      
      <div className={"flex m-1 mb-10 overflow-hidden justify-center items-center"}  >
        <a href={"#"}>
          <Image className={"border border-gray-300 rounded-lg"} src={"/data/911.png"} alt={"None"} height={500} width={500}/>
        </a>
      </div>
      <div className={"flex m-1 mb-10 overflow-hidden justify-center items-center"} >
        <a href={"#"}>
          <Image className={"border border-gray-300 rounded-lg"} src={"/data/skyline.png"} alt={"None"} height={500} width={500}/>
        </a>
      </div>
      <div className={"flex m-1 mb-10 overflow-hidden justify-center items-center"} >
        <a href={"#"}>
          <Image className={"border border-gray-300 rounded-lg"} src={"/data/gallardo.png"} alt={"None"} height={500} width={500}/>
        </a>
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
      </div> 

      
    </main>
  )
}
