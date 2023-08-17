import cars from '../data.json';
import ImageCarousel from '../ImageCarousel';
import slugify from "slugify";

interface Props {
  params: {
    slug: string;
  };
}



export default function CarPage({ params }: Props) {
 
  const myCar = cars.find(car => slugify(car.name).toLowerCase() == params.slug);
  console.log(params.slug)

  if (!myCar) {
    return (
      <div>
        <div>Car not Found</div>
      </div>
    );
  }

  return (
    <main>
      <div className="bg-[url('/bg.jpg')] px-4 py-8 md:px-8">
    <div className="md:flex md:flex-col md:space-y-4">
  
        <div className="md:hidden">
            <ImageCarousel />
            <p className="text-white text-4xl font-bold py-2" >Nissan GT-R</p>
            <p className="text-white text-4xl font-semibold py-2">$85,000</p>
            <p className="text-white text-4xl py-2">30,000 km</p>
            <p className="text-white text-4xl py-2">Inventory: 10</p>
            <p className="text-white text-4xl py-5">Description:</p>
            <p className="text-white text-lg">Specs: High-performance sports car</p>
            <p className="text-white text-lg">Accidents: None</p>
            <p className="text-white text-lg">Maintenance: Regularly serviced</p>
            <p className="text-white text-lg">Mods: Upgraded exhaust system</p>
            <p className="text-white text-lg">Condition: Excellent</p>
            <p className="text-white text-lg">Sale Type: New</p>
            <p className="text-white text-lg">Delivery Type: Pickup / Shipping</p>
        </div>
        
      
        <div className="hidden md:flex md:space-x-4">
            <div className="md:w-1/2">
                <ImageCarousel />
            </div>
            <div className="md:w-1/2">
                <p className="text-white text-4xl font-bold py-2" >Nissan GT-R</p>
                <p className="text-white text-4xl font-semibold py-2">$85,000</p>
                <p className="text-white text-4xl py-2">30,000 km</p>
                <p className="text-white text-4xl py-2">Inventory: 10</p>
                <p className="text-white text-4xl py-5">Description:</p>
                <p className="text-white text-lg">Specs: High-performance sports car</p>
                <p className="text-white text-lg">Accidents: None</p>
                <p className="text-white text-lg">Maintenance: Regularly serviced</p>
                <p className="text-white text-lg">Mods: Upgraded exhaust system</p>
                <p className="text-white text-lg">Condition: Excellent</p>
                <p className="text-white text-lg">Sale Type: New</p>
                <p className="text-white text-lg">Delivery Type: Pickup / Shipping</p>
            </div>
        </div>
    </div>
</div>

    </main>
  )
  }

  