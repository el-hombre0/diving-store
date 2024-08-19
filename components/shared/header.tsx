import { cn } from "@/lib/utils";
import React, { FC } from "react";
import Container from "./container";
import Image from "next/image";

interface headerProps {
    className?: string,
}

const Header: FC<headerProps> = ({className}) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div>
            <Image src="/logo.png" alt="Logo" width={65} height={55}/>
            <div>
                <h1 className="text-2xl uppercase font-black">Underwater</h1>
                <p className="text-sm text-gray-400 leading-3">Снаряжение для дайвинга</p>
            </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
