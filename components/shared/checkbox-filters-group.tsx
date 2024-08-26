import React, { useState } from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Button, Input } from "../ui";

type Item = FilterCheckboxProps;

interface CheckboxFiltersGroupProps {
  title: string;
  items: Item[];
  defaultItems: Item[]; // Изначально выбранные
  limit?: number; // Сколько элементов по умолчанию показывается
  searchInputPlaceholder?: string; // Поиск по чекбоксам
  onChange?: (values: string[]) => void; // Выбранные чекбоксы
  defaultValue?: string[]; // Уже выбранные чекбоксы
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className,
}) => {
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");

  // Поиск и лимит
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems?.slice(0, limit);
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {/* Кнопка поиска */}
      {showAll && (
        <div className="m-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-100 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            id={item.id}
            key={item.id}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={(ids) => {
              console.log(ids);
            }}
            // checked={selected.has(item.value)}
            checked={false}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <Button
            className="text-primary mt-3"
            variant="secondary"
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {showAll ? "Свернуть" : "Показать всё"}
          </Button>
        </div>
      )}
    </div>
  );
};
