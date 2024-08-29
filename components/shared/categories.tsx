"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCategoryStore } from "@/store/category";

interface categoriesProps {
  className?: string;
}
const categories = [
  { id: 1, name: "Гидрокостюмы" },
  { id: 2, name: "Компенсаторы" },
  { id: 3, name: "Регуляторы" },
  { id: 4, name: "Маски" },
  { id: 5, name: "Боты" },
  { id: 6, name: "Баллоны" },
  { id: 7, name: "Перчатки" },
  { id: 8, name: "Ласты" },
];
export const Categories: React.FC<categoriesProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map(({ id, name }, ind) => (
        <a
          className={cn(
            "flex items-center h-11 font-bold px-4 rounded-2xl",
            categoryActiveId === id && "text-primary shadow-md bg-white"
          )}
          href={`/#${name}`}
          key={ind}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
