import { IRating } from "@/types/interfaces";
import RatingStars from "@atoms/RatingStars";

function UserRating({ rating }: { rating: IRating }) {
  const { avis, createdAt, score, user } = rating;
  
  const [hour, minute] = new Date(createdAt).toLocaleTimeString().split(":");
  const date = `${new Date(createdAt).toLocaleDateString()} à ${hour}:${minute}`;

  return (
    <div className="flex flex-col gap-1 bg-white rounded p-4">
      <div className="flex items-center gap-2">
        <img
          src="/images/user.jpg"
          className="w-12 aspect-square rounded-full"
        />
        <p className="text-xl font-semibold">{user.firstName} {user.lastname}</p>
      </div>
      <RatingStars
        withScore
        number={parseInt(score)}
        className="text-yellow-400"
      />
      <p className="italic text-sm text-secondary mb-4">Publié le {date}</p>
      <p className="mb-4">{avis}</p>
    </div>
  );
}

export default UserRating;
