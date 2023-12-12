import { IRating } from "@/types/interfaces";
import { FaPlus } from "react-icons/fa";
import UserRating from "./UserRating";
import RatingScore from "./RatingScore";

function Ratings({ ratings }: { ratings: IRating[] }) {
  return (
    <div className="flex flex-col gap-3">
      <RatingScore ratings={ratings} />
      <div className="flex items-center justify-center gap-2 w-full h-16 rounded duration-200 cursor-pointer hover:bg-accent">
        <FaPlus size={30} />
        <p className="font-bold text-xl">Ajouter un avis</p>
      </div>
      {ratings
        .sort((r) => -r.score)
        .map((r) => (
          <UserRating rating={r} />
        ))}
    </div>
  );
}

export default Ratings;
