import React from "react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";

type SwiperImageCardProps = {
  imageUrl: string;
  index: number;
};

const SwiperImageCard = ({ imageUrl, index }: SwiperImageCardProps) => {
  return (
    <div className="max-w-sm m-4 bg-gray-800 text-white cursor-pointer">
      <CardHeader>
        <img
          src={imageUrl}
          alt={`Swiper Image ${index}`}
          className="object-cover w-full h-48 rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>Swiper Image {index + 1}</CardTitle>
      </CardContent>
    </div>
  );
};

export default SwiperImageCard;
