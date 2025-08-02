export const availableFilters = Array.from(
  new Set(allGames.map((game) => game.genre))
);

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
