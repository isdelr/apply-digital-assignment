"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import { Game } from "@/app/types";
import { useCartStore } from "@/app/store/cart";
import Icon from "../ui/icon";
import XIcon from "@/public/icons/x.svg";

interface CartItemProps {
  item: Game;
}

const CartItem: FunctionComponent<CartItemProps> = ({ item }) => {
  const { removeFromCart } = useCartStore();

  return (
    <div className="flex flex-col gap-4 border-b border-gray-300 py-5">
      <div className="flex flex-row gap-4 items-start">
        <div className="relative w-full lg:w-[256px] h-[156px] flex-shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            className="object-cover"
          />
        </div>

        {/* Text Content for Desktop */}
        <div className="hidden lg:flex flex-col flex-grow gap-5">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-text-secondary">
              {item.genre.toUpperCase()}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl text-stroke-primary">
                {item.name}
              </h3>
              <p className="text-text-secondary">{item.description}</p>
            </div>
          </div>
          <div className="flex justify-end items-end h-full mt-auto">
            <span className="font-bold text-xl text-stroke-primary">
              ${item.price}
            </span>
          </div>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="flex-shrink-0"
        >
          <Icon icon={XIcon} className="size-3 text-gray-500" />
        </button>
      </div>

      {/* Text and Price for Mobile */}
      <div className="flex flex-col lg:hidden gap-11">
        <div className="flex flex-col gap-3">
          <span className="font-bold text-sm text-text-secondary">
            {item.genre.toUpperCase()}
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg text-stroke-primary">
              {item.name}
            </h3>
            <p className="text-base text-text-secondary">{item.description}</p>
          </div>
        </div>
        <div className="flex justify-end items-center h-full mt-auto">
          <span className="font-bold text-lg text-stroke-primary">
            ${item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;