import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { Container } from "@/components/shared";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingBasket, UserRound } from "lucide-react";
interface headerProps {
  className?: string;
}

export const Header: FC<headerProps> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={65} height={55} />
          <div>
            <h1 className="text-2xl uppercase font-black">Underwater</h1>
            <p className="text-sm text-gray-400 leading-3">
              Снаряжение для дайвинга
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-1" variant="outline">
            <UserRound size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>100 &#8381; </b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingBasket size={16} className="relative" strokeWidth={2}/>
                <b>3</b>
              </div>
              <ArrowRight size={20} className="right-6 absolute transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
