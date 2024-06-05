"use client";

import { useEffect, useState } from "react";
import { getCars } from "./api/carService";
import CarCard from "./components/feature/carCard";

type Car = {
  id: string;
  year: string;
  manufacturer: string;
  model: string;
  engine_size: string;
  car_type: string;
  price: string;
  image_url: string;
};

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        setError("Error loading data!");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="app p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Car Listing</h1>
      <div className="car-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default App;
