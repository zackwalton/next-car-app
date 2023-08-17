import ListingCard from "@/app/(shop)/marketplace/ListingCard";
import {Metadata} from "next";
import {Button, Chip, InputAdornment, TextField} from "@mui/material";
import {SearchSharp, Storefront} from "@mui/icons-material";
import CarImage1 from "@/public/car-temp1.png"
import CarImage2 from "@/public/car-temp2.png"
import CarImage3 from "@/public/car-temp3.jpeg"

// Export page metadata for SEO
export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Marketplace to view cars available for sale',
}

const cars = [
  {
    name: "Ferrari 488 GTB",
    price: 300000,
    inventory: 6
  },
  {
    name: "Ferrari F8 Tributo",
    price: 275000,
    inventory: 8
  },
  {
    name: "Ferrari SF90 Stradale",
    price: 625000,
    inventory: 1
  },
  {
    name: "Ferrari 812 Superfast",
    price: 340000,
    inventory: 24
  },
  {
    name: "Ferrari Roma",
    price: 220000,
    inventory: 45
  },
  {
    name: "Ferrari Portofino M",
    price: 250000,
    inventory: 36
  },
  {
    name: "Ferrari Monza SP2",
    price: 1900000,
    inventory: 94
  },
  {
    name: "Ferrari 488 Pista",
    price: 350000,
    inventory: 42
  },
  {
    name: "Ferrari F12 Berlinetta",
    price: 300000,
    inventory: 31
  },
  {
    name: "Ferrari GTC4Lusso",
    price: 300000,
    inventory: 22
  },
  {
    name: "Ferrari LaFerrari",
    price: 3600000,
    inventory: 2
  },
  {
    name: "Ferrari 458 Italia",
    price: 230000,
    inventory: 43
  },
  {
    name: "Ferrari California",
    price: 200000,
    inventory: 12
  },
  {
    name: "Ferrari 599 GTB Fiorano",
    price: 260000,
    inventory: 18
  },
  {
    name: "Ferrari 430 Scuderia",
    price: 215000,
    inventory: 19
  },
  {
    name: "Ferrari Testarossa",
    price: 180000,
    inventory: 17
  },
  {
    name: "Ferrari 360 Modena",
    price: 130000,
    inventory: 32
  },
  {
    name: "Ferrari F430",
    price: 200000,
    inventory: 2
  },
  {
    name: "Ferrari Enzo",
    price: 3500000,
    inventory: 1
  },
  {
    name: "Ferrari 575M Maranello",
    price: 160000,
    inventory: 4
  }
]
const carBrands = [
  "Rolls-Royce",
  "Bentley",
  "Bugatti",
  "Lamborghini",
  "Ferrari",
  "Porsche",
  "Aston Martin",
  "Maserati",
  "Lexus",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Jaguar",
  "Land Rover",
  "Alfa Romeo",
  "McLaren",
  "Cadillac",
  "Lincoln",
  "Maybach"
];
const carImages = [
    CarImage1,
    CarImage2,
    CarImage3
]

export default async function Marketplace() {

  // const response = await fetch(`https://our-database-or-whatever.com/yeah`)

  return (
      <div className={"flex h-full"}>
        <div className={"flex flex-col border-r border-gray-200 overscroll-none w-1/4 p-2  z-10"}
             style={{boxShadow: "2px 0px 10px -2px #808080"}}>
          <p className={"text-2xl font-bold pl-2 pb-5"}>Marketplace</p>
          <TextField className={"m-2"} label="Search cars" variant="outlined" InputProps={{
            startAdornment: (<InputAdornment position="start"><SearchSharp/></InputAdornment>)
          }}/>
          <Button className={"m-2"} variant={"outlined"} startIcon={<Storefront />}>Browse all</Button>
          <hr className={"m-2"}/>
          <p className={"p-2 text-lg font-bold"}>Filters</p>
          <div className={"flex flex-row flex-wrap"}>
            {carBrands.map((brand) => {
              return <Chip className={"w-36 m-3"} label={brand} variant={"outlined"} key={brand}/>
            })}
          </div>
        </div>
        <div className={"flex w-3/4"}>
          <div className={"overflow-y-scroll h-screen overscroll-none"} style={{backgroundColor: "#EFF2F5"}}>
            {/*<p className={"text-xl font-bold p-3"}>Today&apos;s picks</p>*/}
            <div className={"flex flex-wrap justify-center items-start pt-4"}>
              {cars.map((car, index) => {
                return <ListingCard car={car} image={carImages[index % 3]} key={car.name}/>
              })}
            </div>
          </div>
        </div>
      </div>
  )
}
