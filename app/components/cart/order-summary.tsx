"use client";

import { FunctionComponent } from "react";
import { Game } from "@/app/types";
import Button from "../ui/button";

interface OrderSummaryProps {
  items: Game[];
}

const OrderSummary: FunctionComponent<OrderSummaryProps> = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="lg:w-[522px] w-full flex flex-col gap-8 flex-shrink-0">
      <div className="w-full bg-white border border-gray-300 rounded-lg p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-stroke-primary">
            Order Summary
          </h3>
          <p className="text-lg text-text-secondary">{items.length} items</p>
        </div>

        <div className="flex flex-col gap-4 py-5  border-b border-gray-300">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-lg text-stroke-primary"
            >
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center font-bold text-xl text-stroke-primary pb-12">
          <span>Order Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Button variant="secondary" className="w-full">
        Checkout
      </Button>
    </div>
  );
};

export default OrderSummary;
