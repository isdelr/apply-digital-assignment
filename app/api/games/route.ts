import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { Game } from "@/app/types"; 


const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const ITEMS_PER_PAGE = 12;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("genre");
  let page = parseInt(searchParams.get("page") ?? "1", 10);


  const jsonDirectory = path.join(process.cwd(), 'public', 'mockservice');

  const fileContents = await fs.readFile(path.join(jsonDirectory, 'games.json'), 'utf8');
  
  const jsonData = JSON.parse(fileContents);
  let allGames: Game[] = jsonData.data;

  const availableFilters = Array.from(new Set(allGames.map(game => game.genre)));


  let games = allGames;

  if (genre && genre.toLowerCase() !== 'all') {
    games = games.filter(
      (game) => game.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  // Calculate total pages based on the *filtered* list for accurate pagination
  const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);
  if (page < 1 || isNaN(page)) page = 1;
  if (page > totalPages && totalPages > 0) page = totalPages;


  await delay(1000);

  const fromIndex = (page - 1) * ITEMS_PER_PAGE;
  const toIndex = fromIndex + ITEMS_PER_PAGE;
  
  const paginatedGames = games.slice(fromIndex, toIndex);

  const currentPage = page;

  return NextResponse.json({ games: paginatedGames, availableFilters, totalPages, currentPage });
}