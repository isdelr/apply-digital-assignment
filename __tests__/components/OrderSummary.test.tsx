import { render, screen } from "@testing-library/react";
import OrderSummary from "../../app/components/cart/order-summary";
import { expect, test, describe } from "vitest";

const mockItems = [
  {
    id: 1,
    name: "Game 1",
    price: 50,
    genre: "Action",
    image: "",
    description: "",
    isNew: false,
  },
  {
    id: 2,
    name: "Game 2",
    price: 75,
    genre: "RPG",
    image: "",
    description: "",
    isNew: true,
  },
];

describe("OrderSummary", () => {
  test("calculates and displays the correct total", () => {
    render(<OrderSummary items={mockItems} />);

    expect(screen.getByText("Order Total")).toBeInTheDocument();
    expect(screen.getByText("$125.00")).toBeInTheDocument();
  });
});