import cars from '../data.json';
import Image from 'next/image';
import ImageCarousel from '../ImageCarousel';

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
        
        <div className='flex flex-col space-y-2 py-10'>
          <ImageCarousel /> 
          <p className='text-white text-4xl'>{myCar.name}</p>
          <p className='text-white text-4xl'>${myCar.price}</p>
          <p className='text-white text-4xl'>{myCar.Kilometers} km</p>
          <p className='text-white text-4xl'>Inventory  {myCar.inventory}</p>
          <p className='text-white text-xl'>{myCar.specs}</p>
          <p className='text-white text-xl'>{myCar.Accidents}</p>
          <p className='text-white text-xl'>{myCar.Maintenance}</p>
          <p className='text-white text-xl'>{myCar.Mods}</p>
          <p className='text-white text-xl'>{myCar.Condition}</p>
          <p className='text-white text-xl'>{myCar.SaleType}</p>
          <p className='text-white text-xl'>{myCar.DeliveryType}</p>

        </div>
    </div>
    </main>
  )
  }

  