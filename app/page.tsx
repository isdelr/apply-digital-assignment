import CatalogHeader from "@/components/home/catalog-header";
import { getGames } from "./services/games";

export default async function Home() {
  const data = (await getGames());

  return (
    <div>
      <div className="md:px-32 px-6 md:pt-12 pt-8 md:pb-12 pb-8">
        <CatalogHeader availableFilters={data.availableFilters} title="Top Sellers" />
      </div>
    </div>
  );
}