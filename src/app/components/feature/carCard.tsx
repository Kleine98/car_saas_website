import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type CarProps = {
  car: {
    id: string;
    year: string;
    manufacturer: string;
    model: string;
    engine_size: string;
    car_type: string;
    price: string;
    image_url: string;
  };
};

const CarCard = ({ car }: CarProps) => {
  return (
    <Link href={`/cars/${car.id}`}>
      <Card className="max-w-sm m-4 bg-gray-800 text-white cursor-pointer">
        <CardHeader>
          <img
            src={car.image_url}
            alt={`${car.model}`}
            className="object-cover w-full h-48 rounded-t-lg"
          />
        </CardHeader>
        <CardContent>
          <CardTitle>
            {car.manufacturer} {car.model}
          </CardTitle>
          <CardDescription>{car.car_type}</CardDescription>
          <p className="mt-2 text-lg">Engine Size: {car.engine_size}L</p>
          <p className="text-lg">Year: {car.year}</p>
          <p className="text-lg">Price: ${car.price}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CarCard;
