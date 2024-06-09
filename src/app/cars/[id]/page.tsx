// pages/cars/[id].tsx
"use client";
import { useEffect, useState } from "react";
import { getCarById } from "../../api/carService";
import SwiperImageCard from "../../components/feature/SwiperImageCard";

type Car = {
  id: string;
  year: string;
  manufacturer: string;
  model: string;
  engine_size: string;
  car_type: string;
  price: string;
  image_url: string;
  swiper_images: string[];
};

const CarDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const [car, setCar] = useState<Car | null>(null);

  const fetchCar = async () => {
    try {
      const data = await getCarById(id as string);
      setCar(data);
    } catch (error) {
      console.error("Error fetching car:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCar();
    }
  }, [id]);

  if (!car) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>
        {car.manufacturer} {car.model}
      </h1>
      <p>Year: {car.year}</p>
      <p>Engine Size: {car.engine_size}L</p>
      <p>Car Type: {car.car_type}</p>
      <p>Price: ${car.price}</p>
      <img src={car.image_url} alt={`${car.manufacturer} ${car.model}`} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {car.swiper_images.map((imageUrl, index) => (
          <SwiperImageCard key={index} imageUrl={imageUrl} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CarDetailPage;
