import { getAllArtisants } from "@/fetch/artisantActions";
import { IArtisant } from "@/types/interfaces";
import ArtisantList from "@molecules/ArtisantList";
import SearchBanner, { IFilters } from "@molecules/SearchBanner";
import { useEffect, useState } from "react";

function Home() {
  const [filters, setFilters] = useState<IFilters>({});
  const [artisants, setArtisants] = useState<IArtisant[]>([]);

  useEffect(() => {
    getAllArtisants().then((artisants) => {
      setArtisants(artisants);
    });
  }, []);

  const getFilteredArtisants = () => {
    return artisants.filter(
      ({ compagny_name, job_description, avg_price, ...artisants }) => {
        const { query, price } = filters;
        if (query) {
          if (
            !compagny_name.toLowerCase().includes(query) &&
            !job_description.toLowerCase().includes(query)
          )
            return false;
        }

        if (price) {
          const { min, max } = price;
          if (
            typeof min === "number" &&
            typeof max === "number" &&
            (avg_price < min || avg_price > max)
          )
            return false;
          if (typeof min === "number" && avg_price < min) return false;
          if (typeof max === "number" && avg_price > max) return false;
        }

        return true;
      }
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <SearchBanner value={filters} handleChange={setFilters} />
      <ArtisantList artisants={getFilteredArtisants()} />
    </div>
  );
}

export default Home;
