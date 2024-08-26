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
  { text: "Ласты", value: "0" },
  { text: "Маски", value: "1" },
  { text: "Трубки", value: "2" },
  { text: "BCD", value: "3" },
  { text: "Боты", value: "4" },
  { text: "Комплекты", value: "5" },
  { text: "Перчатки", value: "6" },
  { text: "Гидрокостюмы", value: "7" },
  { text: "Сухари", value: "8" },
  { text: "Регуляторы", value: "9" },
  { text: "Баллоны", value: "10" },
];
const checkboxFiltersDefaultItems: FilterCheckboxProps[] = [
  { text: "Ласты", value: "0" },
  { text: "Маски", value: "1" },
  { text: "Трубки", value: "2" },
  { text: "BCD", value: "3" },
  { text: "Боты", value: "4" },
  { text: "Комплекты", value: "5" },
];

const filters = ["Новинки", "Скидки"];
export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title size="sm" text="Фильтрация" className="font-bold mb-5" />
      {/* Верхние фильтры */}
      <div className="flex flex-col gap-4">
        {filters.map((filter, index) => (
          <FilterCheckbox text={filter} value={String(index)} />
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
