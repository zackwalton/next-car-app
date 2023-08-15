//import cars from '../data.json';
import Image from 'next/image';

interface Props {
  params: {
    id: number;
  };
}

const cars = [
  {
    id: 1,
    name: "Porche 911 turbo",
    price: 30000,
    inventory: 1,
    image: "/data/911.png"
  },
  {
    id: 2,
    name: "Lamborghini Gallardo",
    price: 110000,
    inventory: 1,
    image: "/data/gallardo.png"
  },
  {
    id: 3,
    name: "Nissan Skyline",
    price: 150000,
    inventory: 1,
    image: "/data/Skyline.png"
  }
]


export default function CarPage({ params }: Props) {
 
  const myCar = cars.find(car => car.id == params.id);
  console.log(params.id)

  if (!myCar) {
    return (
      <div>
        <div>Car not Found</div>
      </div>
    );
  }

  return (
    <main>
      <div className={"flex m-1 mb-10 overflow-hidden justify-center items-center"}  >
      < Image className={"border border-gray-300 rounded-lg"} src={myCar.image} alt={"None"} height={500} width={500}/> 
      
    </div>
    </main>
  )
  }
