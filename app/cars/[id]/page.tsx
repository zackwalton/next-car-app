import cars from '../data.json';

interface Props {
  params: {
    id: number;
  };
}
function getCarbyID(ID: number) {
  return cars.filter(
    function(cars) {
      return cars.id == ID
    }
  );
}

export default function CarPage({ params }: Props) {
 
  const car = getCarbyID(params.id);
  

  if (!car) {
    return (
      <div>
        <div>{cars[0].id}</div>
        <div>{params.id}</div>
      </div>
    );
  }

  return (
    <main>
      <div>
        <h1>Hello</h1>
      </div>
    </main>
  );
}
