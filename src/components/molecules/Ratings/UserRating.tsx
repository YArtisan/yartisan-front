import { IRating } from "@/types/interfaces";
import RatingStars from "@atoms/RatingStars";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

function UserRating({ rating }: { rating: IRating }) {
  const { avis, created_at, score } = rating;
  const [hour, minute] = created_at.toLocaleTimeString().split(":");
  const date = `${created_at.toLocaleDateString()} à ${hour}:${minute}`;
  const nbLikes = 5;
  const nbDislikes = 8;

  return (
    <div className="flex flex-col gap-1 bg-white rounded p-4">
      <div className="flex items-center gap-2">
        <img
          src="/images/user.jpg"
          className="w-12 aspect-square rounded-full"
        />
        <p className="text-xl font-semibold">John Doe</p>
      </div>
      <RatingStars withScore number={score} className="text-yellow-400" />
      <div>
        <p className="italic text-sm text-secondary">Publié le {date}</p>
        <p>{avis}</p>
      </div>
      <div className="flex items-center gap-2 font-bold">
        <div className="flex items-center gap-1 text-secondary">
          <FaThumbsUp className="text-xl duration-150 hover:scale-110 cursor-pointer" />
          <p>{nbLikes}</p>
        </div>
        <div className="flex items-center gap-1 text-red-500">
          <FaThumbsDown className="text-xl duration-150 hover:scale-110 cursor-pointer" />
          <p>{nbDislikes}</p>
        </div>
      </div>
    </div>
  );
}

export default UserRating;
