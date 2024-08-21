import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface categoriesProps {
  className?: string;
}
const categories = ['Гидрокостюмы', 'Регуляторы', 'Компенсаторы', 'Маски', 'Боты', 'Баллоны', 'Перчатки', 'Ласты'];
const activeIndex = 2;
export const Categories: React.FC<categoriesProps> = ({ className }) => {
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
      {categories.map((el, ind) => 
        <Link className={cn('flex items-center h-11 font-bold px-4 rounded-2xl',
          activeIndex === ind && 'text-primary shadow-md bg-white'
        )} href={'categories/'+ind} key={ind}>
          <button>{el}</button>
        </Link>
      )}
    </div>
  );
};
