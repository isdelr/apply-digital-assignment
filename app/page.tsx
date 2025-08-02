import CatalogHeader from "@/components/home/catalog-header";
import { getGames } from "./services/games";
import CatalogGrid from "./components/home/catalog-grid";
import Button from "./components/ui/button";

export default async function Home() {
  const data = await getGames();

  return (
    <div>
      <div className="lg:pt-12 pt-8 lg:pb-12 pb-8">
        <div className="lg:px-32 px-6">
          <CatalogHeader
            availableFilters={data.availableFilters}
            title="Top Sellers"
          />
        </div>
        <div className="h-0.5 bg-stroke-tertiary lg:my-12 my-8"></div>
        <div className="lg:px-32 px-6 pb-12">
          <CatalogGrid {...data} />
        </div>
        <div className="lg:px-32 px-6 pb-12">
          <Button className="lg:w-fit w-full" variant="secondary" >SEE MORE</Button>
        </div>
      </div>
    </div>
  );
}
