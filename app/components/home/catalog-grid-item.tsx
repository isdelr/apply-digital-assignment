"use client";

import { Game } from "@/app/types";
import { FunctionComponent } from "react";
import Button from "../ui/button";
import Image from "next/image";

const CatalogGridItem: FunctionComponent<Game> = (props) => {
  const handleAddToCart = () => {};

  return (
    <div className="flex flex-col w-full rounded-2xl border border-stroke-secondary p-6 gap-5">
      <div className="w-full h-[240px]">
        <Image
          src={props.image}
          width={360}
          height={240}
          alt={props.name}
          className="object-cover rounded-tl-2xl rounded-tr-2xl w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-bold text-neutral-500">{props.genre?.toUpperCase()}</span>
        <div className="flex justify-between items-center text-text-primary font-bold text-lg">
          <span aria-hidden className="truncate max-w-[80%]">{props.name}</span>
          <span>${props.price}</span>
        </div>
      </div>

      <Button onClick={handleAddToCart}>ADD TO CART</Button>
    </div>
  );
};

export default CatalogGridItem;
