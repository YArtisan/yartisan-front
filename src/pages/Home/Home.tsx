import { getAllArtisans } from "@/fetch/artisanActions";
import { IArtisan } from "@/types/interfaces";
import ArtisanList from "@components/modules/ArtisanList/organisms/ArtisanList";
import SearchBanner, { IFilters } from "@molecules/SearchBanner";
import { getAverageRating } from "@utils/functions";
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
    return artisans.filter(
      ({ company_name, job_description, average_price, ratings }) => {
        const { query, price, note } = filters;
        if (query) {
          if (
            !company_name.toLowerCase().includes(query.toLowerCase()) &&
            !job_description.toLowerCase().includes(query.toLowerCase())
          )
            return false;
        }

        if (price) {
          const { min, max } = price;
          if (
            typeof min === "number" &&
            typeof max === "number" &&
            (average_price < min || average_price > max)
          )
            return false;
          if (typeof min === "number" && average_price < min) return false;
          if (typeof max === "number" && average_price > max) return false;
        }

        if (note && parseInt(note)) {
          const avgRating = getAverageRating(ratings);
          if (avgRating < parseInt(note)) return false;
        }

        return true;
      }
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <SearchBanner value={filters} handleChange={setFilters} />
      <ArtisanList artisans={getFilteredArtisans()} />
      <p>2</p>
    </div>
  );
}

export default Home;
