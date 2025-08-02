import { render, screen } from "@testing-library/react";
import CartPage from "../../app/cart/page";
import { useCartStore } from "../../app/store/cart";
import { expect, test, describe, vi, Mock } from "vitest";

vi.mock("../../app/store/cart");

describe("CartPage", () => {
  test("displays items when the cart is not empty", () => {
    (useCartStore as unknown as Mock).mockReturnValue({
      items: [
        {
          id: "1",
          name: "Test Game",
          price: 60,
          genre: "RPG",
          image: "/test.jpg",
          description: "A test game",
          isNew: false,
        },
      ],
    });

    render(<CartPage />);
    expect(screen.getByText("Your Cart")).toBeInTheDocument();
    const itemCounts = screen.getAllByText(/1 items/i);
    expect(itemCounts.length).toBeGreaterThan(0);
    
    // Fix: Use getAllByText to account for multiple elements with the same name
    const gameTitles = screen.getAllByText("Test Game");
    expect(gameTitles.length).toBeGreaterThan(0);
  });

  test("displays an empty cart message", () => {
    (useCartStore as unknown as Mock).mockReturnValue({ items: [] });

    render(<CartPage />);
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
    expect(screen.getByText("Continue Shopping")).toBeInTheDocument();
  });
});