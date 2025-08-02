"use client";

import { useEffect, useState, useTransition } from "react";
import CatalogHeader from "@/components/home/catalog-header";
import { getGames } from "./services/games";
import CatalogGrid from "@/components/home/catalog-grid";
import Button from "@/components/ui/button";
import { Game } from "./types";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [availableFilters, setAvailableFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  useEffect(() => {
    setLoading(true);

    const getFilteredData = async () => {
      const data = await getGames(genre, 1);
      setGames(data.games);
      setAvailableFilters(data.availableFilters);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setLoading(false);
    };

    getFilteredData()
      .then(() => setLoading(false))
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  }, [genre]);

  const handleSeeMore = () => {
    startTransition(async () => {
      const nextPage = currentPage + 1;
      const data = await getGames(genre, nextPage);
      setGames((prevGames) => [...prevGames, ...data.games]);
      setCurrentPage(data.currentPage);
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="lg:pt-12 pt-8 lg:pb-12 pb-8">
        <div className="lg:px-32 px-6">
          <CatalogHeader
            availableFilters={availableFilters}
            title="Top Sellers"
          />
        </div>
        <div className="h-0.5 bg-stroke-tertiary lg:my-12 my-8"></div>
        <div className="lg:px-32 px-6 pb-12">
          <CatalogGrid games={games} />
        </div>
        {isPending && (
          <p className="text-center font-bold text-text-primary text-lg">
            Loading more games...
          </p>
        )}
        {currentPage < totalPages && !isPending && (
          <div className="lg:px-32 px-6 pb-12">
            <Button
              className="lg:w-fit w-full"
              variant="secondary"
              onClick={handleSeeMore}
            >
              SEE MORE
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
