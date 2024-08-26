import React from "react";
import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  id: number;
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  id,
  text,
  value,
  endAdornment, // Добавление иконки
  onCheckedChange, // Обработчик нажатия на чекбокс
  checked, // Выбран ли чекбокс
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        value={value}
        onCheckedChange={onCheckedChange}
        className="rounded-md w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-one cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
