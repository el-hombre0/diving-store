"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface FiltersProps {
  className?: string;
}

const checkboxFiltersItems: FilterCheckboxProps[] = [
  { id: 1, text: "Ласты", value: "0" },
  { id: 2, text: "Маски", value: "1" },
  { id: 3, text: "Трубки", value: "2" },
  { id: 4, text: "BCD", value: "3" },
  { id: 5, text: "Боты", value: "4" },
  { id: 6, text: "Комплекты", value: "5" },
  { id: 7, text: "Перчатки", value: "6" },
  { id: 8, text: "Гидрокостюмы", value: "7" },
  { id: 9, text: "Сухари", value: "8" },
  { id: 10, text: "Регуляторы", value: "9" },
  { id: 11, text: "Баллоны", value: "10" },
];
const checkboxFiltersDefaultItems: FilterCheckboxProps[] = [
  { id: 1, text: "Ласты", value: "0" },
  { id: 2, text: "Маски", value: "1" },
  { id: 3, text: "Трубки", value: "2" },
  { id: 4, text: "BCD", value: "3" },
  { id: 5, text: "Боты", value: "4" },
  { id: 6, text: "Комплекты", value: "5" },
];

const filters = [
  {
    id: 1,
    text: "Новинки",
  },
  { id: 2, text: "Скидки" },
];
export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title size="sm" text="Фильтрация" className="font-bold mb-5" />
      {/* Верхние фильтры */}
      <div className="flex flex-col gap-4">
        {filters.map((filter, index) => (
          <FilterCheckbox
            key={filter.id}
            id={filter.id}
            text={filter.text}
            value={String(index)}
          />
        ))}
      </div>
      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={10000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="10000"
            min={0}
            max={10000}
            defaultValue={10000}
          />
        </div>
        <RangeSlider min={0} max={10000} step={10} value={[0, 10000]} />
        {/* Фильтр по категориям */}
        <CheckboxFiltersGroup
          title={"Фильтры"}
          items={checkboxFiltersItems}
          defaultItems={checkboxFiltersDefaultItems}
          className="mt-5"
          limit={5}
        />
      </div>
    </div>
  );
};
