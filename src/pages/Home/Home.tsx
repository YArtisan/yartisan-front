import { getAllArtisans } from "@/fetch/artisanActions";
import { IArtisan } from "@/types/interfaces";
import ArtisanList from "@molecules/ArtisanList";
import SearchBanner, { IFilters } from "@molecules/SearchBanner";
import { useEffect, useState } from "react";

function Home() {
  const [filters, setFilters] = useState<IFilters>({});
  const [artisans, setArtisans] = useState<IArtisan[]>([]);

  useEffect(() => {
    getAllArtisans().then((artisans) => {
      setArtisans(artisans);
    });
  }, []);

  const getFilteredArtisans = () => {
    return artisans.filter(({ compagny_name, job_description, avg_price }) => {
      const { query, price } = filters;
      if (query) {
        if (
          !compagny_name.toLowerCase().includes(query.toLowerCase()) &&
          !job_description.toLowerCase().includes(query.toLowerCase())
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
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <SearchBanner value={filters} handleChange={setFilters} />
      <ArtisanList artisans={getFilteredArtisans()} />
    </div>
  );
}

export default Home;
