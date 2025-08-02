import { render, screen, fireEvent } from "@testing-library/react";
import CatalogGridItem from "../../app/components/home/catalog-grid-item";
import { useCartStore } from "../../app/store/cart";
import { expect, test, describe, vi, Mock } from "vitest";

const mockGame = {
  id: 1,
  name: "Test Game",
  genre: "RPG",
  price: 59.99,
  image: "/test.jpg",
  description: "A test game",
  isNew: true,
};

vi.mock("../../app/store/cart");

describe("CatalogGridItem", () => {
  test("renders correctly and adds to cart", () => {
    const addToCart = vi.fn();
    (useCartStore as unknown as Mock).mockReturnValue({
      addToCart,
      isItemInCart: () => false,
    });

    render(<CatalogGridItem {...mockGame} />);

    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();

    const addButton = screen.getByText("ADD TO CART");
    fireEvent.click(addButton);
    expect(addToCart).toHaveBeenCalledWith(mockGame);
  });

  test("removes from cart when already in cart", () => {
    const removeFromCart = vi.fn();
    (useCartStore as unknown as Mock).mockReturnValue({
      removeFromCart,
      isItemInCart: () => true,
    });

    render(<CatalogGridItem {...mockGame} />);

    const removeButton = screen.getByText("REMOVE");
    fireEvent.click(removeButton);
    // Fix: Use number instead of string to match the actual implementation
    expect(removeFromCart).toHaveBeenCalledWith(1);
  });
});