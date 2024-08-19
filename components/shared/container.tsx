import { cn } from '@/lib/utils';
import React, { FC, PropsWithChildren } from 'react'

interface containerProps {
  className?: string
}

const Container: FC<PropsWithChildren<containerProps>> = ({className, children }) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>
     {children}
    </div>
  )
}

export default Container;