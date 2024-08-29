import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-4 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name}></img>
        </div>
      </Link>
      <Title text={name} size="sm" className="mb-1 mt-3" />
      <p className="text-sm text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        voluptatem minima.
      </p>
      <div className="flex justify-between items-center mt-4 ">
        <span className="text-[20px]">
            {price} руб.
        </span>
        <Button variant="secondary" className="text-bold font-bold">
          <Plus size={20} className="w-5 h-5 mr-1"/>
          В корзину
        </Button>
      </div>
    </div>
  );
};
