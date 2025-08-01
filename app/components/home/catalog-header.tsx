"use client";

import { FunctionComponent } from "react";
import Select from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CatalogHeaderProps {
  title: string;
  availableFilters: string[];
}

const CatalogHeader: FunctionComponent<CatalogHeaderProps> = (props) => {
  return (
    <div className="flex flex-col md:gap-12 gap-8 ">
      <h2 className="text-stroke-primary font-bold md:text-3xl text-2xl self-start">
        {props.title}
      </h2>
      <div className="self-end flex gap-6 md:w-3/12 w-full">
        <span className="text-stroke-primary font-bold text-xl">Genre</span>
        <span className="w-0.5 border bg-stroke-secondary" />
        <Select
          // defaultValue={searchParams.get("genre") || "All"}
          // onChange={(e) => {
          //   router.push("/",{ })
          // }}
        >
          <option value="all">All</option>
          {props.availableFilters?.map((filter) => (
            <option key={filter} value={filter.toLowerCase()}>
              {filter}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CatalogHeader;
