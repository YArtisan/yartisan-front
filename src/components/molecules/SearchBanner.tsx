import SearchBar from "@atoms/SearchBar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

function SearchBanner () {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<IFilters>({});

  return (
    <div className="bg-primary flex flex-col gap-8 justify-center items-center p-10">
      <SearchBar
        className="w-full max-w-[750px]"
        query={query}
        setQuery={setQuery}
        handleSearch={() => alert(query)}
      />
      <Filters filters={filters} setFilters={setFilters} />
    </div>
  );
}

interface IFilters {
  industry?: string;
  note?: string;
  price?: { min?: number; max?: number };
}

interface IFiltersProps {
  filters: IFilters;
  setFilters: (val: IFilters) => void;
}

const Filters = ({ filters, setFilters }: IFiltersProps) => {
  const { price } = filters;
  const { t } = useTranslation()

  const handleChange = (slug: keyof IFilters, value: any) => {
    console.log("slug", value);

    setFilters({ ...filters, [slug]: value });
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <div className="flex items-center justify-center bg-dark rounded-md text-white font-bold px-4 py-2 gap-1">
        <span>{t('artisanFilter:industry')}</span>
        <FaChevronDown />
      </div>

      <div className="flex items-center justify-center bg-dark rounded-md text-white font-bold px-4 py-2 gap-1">
        <span>{t('artisanFilter:grade')}</span>
        <FaChevronDown />
      </div>

      <div className="flex flex-wrap items-center justify-center bg-dark rounded-md font-bold px-4 py-2 gap-2">
        <span className="text-white">{t('artisanFilter:price')}</span>
        <div className="flex flex-wrap gap-2 text-black">
          <input
            value={price?.min ?? 0}
            onChange={(e) =>
              handleChange("price", {
                ...filters.price,
                min: parseInt(e.target.value),
              })
            }
            type="number"
            className="rounded-lg max-w-[100px]"
          />
          <span className="text-white">-</span>
          <input
            value={price?.max ?? 0}
            onChange={(e) =>
              handleChange("price", {
                ...filters.price,
                max: parseInt(e.target.value),
              })
            }
            type="number"
            className="rounded-lg max-w-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;
