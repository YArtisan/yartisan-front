import SearchBar from "@atoms/SearchBar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

interface IProps {
  value: IFilters;
  handleChange: (val: IFilters) => void;
}

function SearchBanner({ value, handleChange }: IProps) {
  return (
    <div className="bg-primary flex flex-col gap-8 justify-center items-center p-10">
      <SearchBar
        className="w-full max-w-[750px]"
        query={value.query ?? ""}
        setQuery={(query) => handleChange({ ...value, query })}
      />
      <Filters filters={value} setFilters={handleChange} />
    </div>
  );
}

export interface IFilters {
  query?: string;
  industry?: string;
  note?: string;
  price?: { min?: number; max?: number };
}

interface IFiltersProps {
  filters: IFilters;
  setFilters: (val: IFilters) => void;
}

const Filters = ({ filters, setFilters }: IFiltersProps) => {
  const { price, note } = filters;
  const { t } = useTranslation();
  const [gradeActive, setGradeActive] = useState(false);

  const handleChange = (slug: keyof IFilters, value: any) =>
    setFilters({ ...filters, [slug]: value });

  return (
    <div className="flex gap-2 flex-wrap">
      {/* <div className="flex flex-1 items-center justify-center bg-secondary rounded-md text-white font-bold px-4 py-2 gap-1">
        <span>{t('artisanFilter:industry')}</span>
        <FaChevronDown />
      </div> */}

      <div className="flex flex-1 items-center justify-center bg-secondary rounded-md text-white font-bold px-4 py-2 gap-1">
        <div className="cursor-pointer flex items-center gap-1 relative">
          <select
            value={note ?? ""}
            onChange={(e) => handleChange("note", e.target.value)}
            className="cursor-pointer bg-transparent appearance-none"
          >
            <option className="bg-secondary" value="">
              {t("artisanFilter:grade")}
            </option>
            <option className="bg-secondary" value="1">
              ★ {t("artisanFilter:or")} +
            </option>
            <option className="bg-secondary" value="2">
              ★★ {t("artisanFilter:or")} +
            </option>
            <option className="bg-secondary" value="3">
              ★★★ {t("artisanFilter:or")} +
            </option>
            <option className="bg-secondary" value="4">
              ★★★★ {t("artisanFilter:or")} +
            </option>
            <option className="bg-secondary" value="5">
              ★★★★★
            </option>
          </select>
          <FaChevronDown className="absolute right-2 bottom-1/2 translate-y-1/2" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center bg-secondary rounded-md px-4 py-2 gap-2 max-[616px]:w-full">
        <span className="text-white font-bold">{t("artisanFilter:price")}</span>
        <div className="flex flex-wrap gap-2 text-black">
          <input
            value={price?.min ?? ""}
            placeholder="min"
            onChange={(e) =>
              handleChange("price", {
                ...filters.price,
                min: parseInt(e.target.value),
              })
            }
            type="number"
            className="pl-2 rounded-lg max-w-[80px]"
            min={0}
          />
          <span className="text-white font-bold">-</span>
          <input
            value={price?.max ?? ""}
            placeholder="max"
            onChange={(e) =>
              handleChange("price", {
                ...filters.price,
                max: parseInt(e.target.value),
              })
            }
            type="number"
            className="pl-2 rounded-lg max-w-[80px]"
            min={0}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;
