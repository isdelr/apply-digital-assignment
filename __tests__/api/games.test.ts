import { GET } from "../../app/api/games/route";
import { Game } from "../../app/types";
import { createRequest } from "node-mocks-http";
import { expect, test, describe } from "vitest";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

describe("GET /api/games", () => {
  test("should return the first page of all games", async () => {
    const req = createRequest({
      method: "GET",
      url: `${BASE_URL}/games?page=1`,
    });

    const response = await GET(req);
    const { games, totalPages, currentPage } = await response.json();

    expect(response.status).toBe(200);
    expect(games.length).toBe(12);
    expect(totalPages).toBe(3);
    expect(currentPage).toBe(1);
  });

  test("should return games filtered by genre", async () => {
    const req = createRequest({
      method: "GET",
      url: `${BASE_URL}/games?genre=RPG`,
    });

    const response = await GET(req);
    const { games } = await response.json();

    expect(response.status).toBe(200);
    expect(games.every((game: Game) => game.genre === "RPG")).toBe(true);
  });

  test("should return the correct page of games", async () => {
    const req = createRequest({
      method: "GET",
      url: `${BASE_URL}/games?page=2`,
    });

    const response = await GET(req);
    const { games, currentPage } = await response.json();

    expect(response.status).toBe(200);
    expect(games.length).toBeGreaterThan(0);
    expect(currentPage).toBe(2);
  });
});