import { getAllArtisants } from "@/fetch/artisantActions";
import { IArtisant } from "@/types/interfaces";
import ArtisantCard from "@atoms/ArtisantCard";
import ArtisantDetails from "@molecules/ArtisantDetails";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

function ArtisantList({ artisants }: { artisants: IArtisant[] }) {
  const [selectedArtisant, setSelectedArtisant] = useState<IArtisant | null>(
    null
  );

  const closeDetails = () => {
    const details = document.getElementById("artisant-details");
    if (!details) return;
    details.classList.remove("max-[600px]:animate-card-grow");
    details.classList.add("animate-card-shrink");
    setTimeout(() => setSelectedArtisant(null), 400);
  };

  useEffect(() => {
    if (window.innerWidth < 600) {
      if (selectedArtisant) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    }
  }, [selectedArtisant]);

  return (
    <div className="flex justify-center gap-8 px-5">
      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {artisants.map((artisant, i) => (
          <ArtisantCard
            key={`artisant-${i}-${artisant.compagny_name}`}
            artisant={artisant}
            onClick={() => setSelectedArtisant(artisant)}
            isSelected={selectedArtisant?.id === artisant.id}
          />
        ))}
      </div>
      <div
        className={[
          "relative flex-[2_2_0%]",
          "max-[600px]:fixed max-[600px]:bottom-0 max-[600px]:bg-card max-[600px]:rounded-t-lg",
        ].join(" ")}
      >
        {selectedArtisant && (
          <>
            <div
              className="min-[600px]:hidden absolute bg-card rounded-full p-2 top-2 right-2 z-[1]"
              // onClick={() => setSelectedArtisant(null)}
              onClick={closeDetails}
            >
              <FaTimes size={22} />
            </div>
            <ArtisantDetails
              id="artisant-details"
              artisant={selectedArtisant}
              className="max-[600px]:h-[calc(100vh-100px)] max-[600px]:animate-card-grow"
            />
          </>
        )}
      </div>
    </div>
  );
}
export default ArtisantList;
