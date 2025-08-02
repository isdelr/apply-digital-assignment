"use client";

import { useCartStore } from "@/app/store/cart";
import Link from "next/link";
import Icon from "@/components/ui/icon";
import ArrowLeftIcon from "@/public/icons/arrow_left.svg";
import CartItem from "@/components/cart/cart-item";
import OrderSummary from "@/components/cart/order-summary";


export default function CartPage() {
  const { items } = useCartStore();

  return (
    <div className="w-full bg-white">
      <div className="py-6 px-6 lg:px-32 bg-surface-secondary lg:bg-white">
        <Link
          href="/"
          className="flex items-center gap-2 text-stroke-primary font-medium w-fit"
        >
          <Icon icon={ArrowLeftIcon} className="size-3" />
          <span>Back to Catalog</span>
        </Link>
      </div>

      <main className="px-6 lg:px-32 py-12">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="font-bold text-4xl text-stroke-primary">Your Cart</h2>
          <p className="text-2xl text-text-secondary">{items.length} items</p>
        </div>

        {items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="flex-grow w-full">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <OrderSummary items={items} />
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-text-secondary">Your cart is empty.</p>
            <Link href="/" className="text-lg text-stroke-primary underline mt-4 inline-block">
              Continue Shopping
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}