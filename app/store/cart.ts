import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Game } from "@/app/types";

interface CartState {
  items: Game[];
  addToCart: (item: Game) => void;
  removeFromCart: (itemId: number) => void;
  isItemInCart: (itemId: number) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) =>
        set((state) => {
          if (state.items.find((i) => i.id === item.id)) {
            return { items: state.items };
          }
          return { items: [...state.items, item] };
        }),
      removeFromCart: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),
      isItemInCart: (itemId) => {
        const { items } = get();
        return items.some((item) => item.id === itemId);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);