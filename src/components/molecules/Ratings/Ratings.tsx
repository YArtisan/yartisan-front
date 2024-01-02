import { IRating } from "@/types/interfaces";
import UserRating from "./UserRating";
import RatingScore from "./RatingScore";

function Ratings({ ratings }: { ratings: IRating[] }) {
  return (
    <div className="flex flex-col gap-3">
      <RatingScore ratings={ratings} />
      {ratings
        .sort((r) => -r.score)
        .map((r) => (
          <UserRating key={`user-rating-${r.id}`} rating={r} />
        ))}
    </div>
  );
}

export default Ratings;
