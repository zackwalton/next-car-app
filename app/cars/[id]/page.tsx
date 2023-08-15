import cars from '../data.json';
import Image from 'next/image';

interface Props {
  params: {
    id: number;
  };
}



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
      <div className={"flex bg-[url('/bg.jpg')] overflow-hidden justify-center items-center"}  >
      < Image className={"border border-gray-300 rounded-lg"} src={myCar.image} alt={"None"} height={500} width={500}/> 
    </div>
    </main>
  )
  }
