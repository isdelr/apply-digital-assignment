import { Game } from "@/app/types";
import { FunctionComponent } from "react";
import CatalogGridItem from "./catalog-grid-item";

interface Props {
  games: Game[];
}

const CatalogGrid: FunctionComponent<Props> = ({ games }) => {
  return (
    <div className="grid lg:grid-cols-3 lg:gap-12 grid-cols-1 gap-6">
      {games.map((game) => (
        <CatalogGridItem key={game.id} {...game} />
      ))}
    </div>
  );
};

export default CatalogGrid;
