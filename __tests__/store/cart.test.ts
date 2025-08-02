import { useCartStore } from "../../app/store/cart";
import { act } from "@testing-library/react";
import { expect, test, describe, beforeEach } from "vitest";

const mockGame = {
  id: 1,
  name: "Test Game",
  genre: "RPG",
  price: 59.99,
  image: "/test.jpg",
  description: "A test game",
  isNew: true,
};

describe("useCartStore", () => {
  beforeEach(() => {
    // Reset the store before each test
    act(() => {
      useCartStore.setState({ items: [] });
    });
  });

  test("should add an item to the cart", () => {
    act(() => {
      useCartStore.getState().addToCart(mockGame);
    });

    expect(useCartStore.getState().items).toEqual([mockGame]);
  });

  test("should remove an item from the cart", () => {
    act(() => {
      useCartStore.getState().addToCart(mockGame);
      useCartStore.getState().removeFromCart(mockGame.id);
    });

    expect(useCartStore.getState().items).toEqual([]);
  });
});