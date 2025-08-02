import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "../../app/components/cart/cart-item";
import { useCartStore } from "../../app/store/cart";
import { expect, test, describe, vi, Mock } from "vitest";

const mockItem = {
  id: 1,
  name: "Test Game",
  genre: "RPG",
  price: 59.99,
  image: "/test.jpg",
  description: "A test game",
  isNew: true,
};

vi.mock("../../app/store/cart");

describe("CartItem", () => {
  test("renders item details and handles removal", () => {
    const removeFromCart = vi.fn();
    (useCartStore as unknown as Mock).mockReturnValue({ removeFromCart });

    render(<CartItem item={mockItem} />);

    const gameTitles = screen.getAllByText("Test Game");
    expect(gameTitles.length).toBeGreaterThan(0);

    const prices = screen.getAllByText("$59.99");
    expect(prices.length).toBeGreaterThan(0);

    // Fix: Use getAllByText to handle multiple description elements
    const descriptions = screen.getAllByText("A test game");
    expect(descriptions.length).toBeGreaterThan(0);

    const removeButton = screen.getByRole("button");
    fireEvent.click(removeButton);

    expect(removeFromCart).toHaveBeenCalledWith(1);
  });
});