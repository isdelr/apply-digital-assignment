import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { expect, test, describe, vi, beforeEach } from "vitest";
import Home from "../../app/page";
import * as gameService from "../../app/services/games";
import { useSearchParams } from "next/navigation";

// Mock the services and hooks
vi.mock("../../app/services/games");
vi.mock("next/navigation");

const mockGamesPage1 = {
  games: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Game ${i + 1}`,
    genre: "Action",
    price: 59.99,
    image: `/game${i + 1}.jpg`,
    description: `Description for game ${i + 1}`,
    isNew: i % 2 === 0,
  })),
  availableFilters: ["Action", "RPG", "Adventure"],
  currentPage: 1,
  totalPages: 2,
};

const mockGamesPage2 = {
  games: Array.from({ length: 8 }, (_, i) => ({
    id: i + 13,
    name: `Game ${i + 13}`,
    genre: "Action",
    price: 49.99,
    image: `/game${i + 13}.jpg`,
    description: `Description for game ${i + 13}`,
    isNew: false,
  })),
  availableFilters: ["Action", "RPG", "Adventure"],
  currentPage: 2,
  totalPages: 2,
};

describe("Home Page", () => {
  beforeEach(() => {
    vi.mocked(useSearchParams).mockReturnValue({
      get: vi.fn().mockReturnValue(null),
    } as any);

    vi.mocked(gameService.getGames).mockResolvedValue(
      JSON.parse(JSON.stringify(mockGamesPage1))
    );
  });

  test("should display the loading component initially", () => {
    render(<Home />);
    expect(screen.getByTestId("fallback-icon")).toBeInTheDocument();
    expect(screen.getByText("Loading Games...")).toBeInTheDocument();
  });

  test("should render the catalog header and initial games", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText("Top Sellers")).toBeInTheDocument();
    });

    await waitFor(() => {
      // Fix: Assert that getAllByText returns a non-empty array instead of using toBeInTheDocument on an array.
      expect(screen.getAllByText("Game 1").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Game 12").length).toBeGreaterThan(0);
    });
  });

  test("should load more games when 'SEE MORE' is clicked", async () => {
    vi.mocked(gameService.getGames)
      .mockResolvedValueOnce(JSON.parse(JSON.stringify(mockGamesPage1)))
      .mockResolvedValueOnce(JSON.parse(JSON.stringify(mockGamesPage2)));

    render(<Home />);

    await waitFor(() => {
      // Fix: Assert that getAllByText returns a non-empty array.
      expect(screen.getAllByText("Game 1").length).toBeGreaterThan(0);
    });

    const seeMoreButton = (await screen.findAllByText<HTMLButtonElement>(/see more/i))[0];
    fireEvent.click(seeMoreButton);

    await waitFor(() => {
      // Fix: Use getAllByText for consistency and to avoid errors if multiple elements are found.
      expect(screen.getAllByText("Game 13").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Game 20").length).toBeGreaterThan(0);
    });

    await waitFor(() => {
      expect(
        seeMoreButton
      ).not.toBeInTheDocument();
    });
  });

  test("should refetch games when genre filter changes", async () => {
    // Fix: Use mockReset() to clear the mock implementation from beforeEach.
    vi.mocked(gameService.getGames).mockReset();

    const mockRpgGames = {
      games: [
        {
          id: 17,
          genre: "RPG",
          image: "/game-images/finalfantasyxv.jpeg",
          name: "Final Fantasy XV",
          description:
            "Embark on an epic journey with your friends to reclaim your homeland.",
          price: 39.99,
          isNew: false,
        },
      ],
      availableFilters: ["Action", "RPG"],
      currentPage: 1,
      totalPages: 1,
    };
    vi.mocked(gameService.getGames).mockResolvedValue(mockRpgGames);
    vi.mocked(useSearchParams).mockReturnValue({
      get: vi.fn().mockReturnValue("RPG"),
    } as any);

    render(<Home />);

    await waitFor(() => {
      expect(gameService.getGames).toHaveBeenCalledWith("RPG", 1);
    });

    await waitFor(() => {
      // Fix: Use getAllByText to be safe.
      expect(screen.getAllByText("Final Fantasy XV").length).toBeGreaterThan(0);
    });
  });
});