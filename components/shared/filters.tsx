import { cn } from '@/lib/utils'
import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './filter-checkbox'

interface FiltersProps {
  className?: string,
}

const filters = ['Новинки', 'Скидки', 'Фридайвинг', 'Мужчины', 'Женщины'];
export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={cn('',className)}>
     <Title size='sm' text='Фильтрация' className='font-bold mb-5'/>
     <div className='flex flex-col gap-4'>
      {filters.map((filter, index)=>
        <FilterCheckbox text={filter} value={String(index)}/>
      )}
      
     </div>
    </div>
  )
}
