import { IArtisan } from "@/types/interfaces";
import { getAverageRating, getCompleteAddress } from "@utils/functions";
import React from "react";
import { FaBookmark, FaStar, FaStarHalf } from "react-icons/fa";
import RatingStars from "../atoms/RatingStars";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  artisan: IArtisan;
  isSelected: boolean;
}

function ArtisanCard({ artisan, className, isSelected, ...props }: IProps) {
  const { compagny_name, address, ratings, avg_price } = artisan;
  const avgRating = getAverageRating(ratings);
    ratings.reduce((prev, curr) => prev + curr.score, 0) / ratings.length;

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
          <RatingStars number={avgRating} withScore />
          <p className="underline">{ratings.length} avis</p>
        </div>
        <p className="bg-accent font-bold px-3 py-1 text-white rounded-lg h-fit">
          ~ {avg_price} €
        </p>
      </div>
    </div>
  );
}

export default ArtisanCard;
