import { IArtisant } from "@/types/interfaces";
import { getAverageRating, getCompleteAddress } from "@utils/functions";
import React from "react";
import { FaBookmark, FaStar, FaStarHalf } from "react-icons/fa";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  artisant: IArtisant;
  isSelected: boolean;
}

function ArtisantCard({ artisant, className, isSelected, ...props }: IProps) {
  const { compagny_name, address, ratings, avg_price } = artisant;
  const avgRating = getAverageRating(ratings);

  return (
    <div
      {...props}
      className={[
        "flex flex-col gap-10 justify-between bg-card rounded-md p-4 shadow-lg border-[1px] cursor-pointer duration-75",
        `${isSelected ? "border-secondary" : ""}`,
        className,
      ].join(" ")}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-bold">{compagny_name}</p>
          <p>{getCompleteAddress(address)}</p>
        </div>
        <FaBookmark size={24} />
      </div>
      <div className="flex justify-between gap-1 flex-wrap">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-semibold">{avgRating}</p>
            {Array.from(new Array(Math.floor(avgRating)).keys()).map((i) => (
              <FaStar key={`artisant-${compagny_name}-rating-star-${i}`} />
            ))}
            {avgRating % 1 !== 0 && <FaStarHalf />}
          </div>
          <p className="underline">{ratings.length} avis</p>
        </div>
        <p className="bg-accent font-bold px-3 py-1 text-white rounded-lg h-fit">
          ~ {avg_price} €
        </p>
      </div>
    </div>
  );
}

export default ArtisantCard;
