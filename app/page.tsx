import CatalogHeader from "@/components/home/catalog-header";

export default async function Home() {
  return (
    <div>
      <div className="md:px-32 px-6 md:pt-12 pt-8 md:pb-12 pb-8">
        <CatalogHeader availableFilters={[]} title="Top Sellers" />
      </div>
    </div>
  );
}
