import { IArtisan } from "@/types/interfaces";
import ArtisanCard from "@atoms/ArtisanCard";
import ArtisanDetails from "@organisms/ArtisanDetails";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

function ArtisanList({ artisans }: { artisans: IArtisan[] }) {
  const [selectedArtisan, setSelectedArtisan] = useState<IArtisan | null>(null);

  const closeDetails = () => {
    const details = document.getElementById("artisan-details");
    if (!details) return;
    details.classList.remove("max-[900px]:animate-card-grow");
    details.classList.add("animate-card-shrink");
    setTimeout(() => setSelectedArtisan(null), 400);
  };

  useEffect(() => {
    if (window.innerWidth < 600) {
      if (selectedArtisan) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    }
  }, [selectedArtisan]);

  return (
    <div className="flex justify-center gap-8 px-5">
      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {artisans.map((artisan, i) => (
          <ArtisanCard
            key={`artisan-${i}-${artisan.compagny_name}`}
            artisan={artisan}
            onClick={() => setSelectedArtisan(artisan)}
            isSelected={selectedArtisan?.id === artisan.id}
          />
        ))}
      </div>
      <div
        className={[
          "relative flex-[2_2_0%]",
          "max-[900px]:fixed max-[900px]:bottom-0 max-[900px]:bg-card max-[900px]:rounded-t-lg max-[900px]:w-full",
        ].join(" ")}
      >
        {selectedArtisan && (
          <>
            <div
              className="min-[600px]:hidden absolute bg-card rounded-full p-2 top-2 right-2 z-[1]"
              // onClick={() => setSelectedArtisan(null)}
              onClick={closeDetails}
            >
              <FaTimes size={22} />
            </div>
            <ArtisanDetails
              id="artisan-details"
              artisan={selectedArtisan}
              className="max-[600px]:h-[calc(100vh-100px)] max-[600px]:animate-card-grow"
            />
          </>
        )}
      </div>
    </div>
  );
}
export default ArtisanList;
