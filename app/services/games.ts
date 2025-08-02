import { Game } from "@/app/types"

export interface GamesApiResponse {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Fetches a list of games from the API.
 * @param genre - The genre to filter by.
 * @param page - The page number for pagination.
 * @returns A promise that resolves to the API response.
 */
export const getGames = async (
  genre?: string | null,
  page: number = 1
): Promise<GamesApiResponse> => {
  // Construct the URL with query parameters
  const url = new URL(`${API_BASE_URL}/games`);
  if (genre && genre.toLowerCase() !== "all") {
    url.searchParams.append("genre", genre);
  }
  url.searchParams.append("page", String(page));

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }
    const data: GamesApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);

    throw error;
  }
};