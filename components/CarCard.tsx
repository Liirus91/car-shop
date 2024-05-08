'use client';

import { Car } from '@/types';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>Rent price</span>
      </p>
    </div>
  );
};

export default CarCard;
