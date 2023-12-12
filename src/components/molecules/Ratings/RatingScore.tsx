import { IRating } from "@/types/interfaces";
import Jauge from "@atoms/Jauge";
import RatingStars from "@atoms/RatingStars";
import { getAverageRating } from "@utils/functions";
import { FaStar } from "react-icons/fa";

function RatingScore({ ratings }: { ratings: IRating[] }) {
  const avg = getAverageRating(ratings);
  const hasTwoDecimals = (avg * 100) % 10 === 0;

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold">
          {hasTwoDecimals ? avg : avg.toFixed(1)}
        </p>
        <RatingStars number={avg} className="text-3xl text-yellow-400" filled />
        <p className="italic underline">{ratings.length} avis</p>
      </div>
      <div className="flex flex-col gap-1 pb-6 border-b-2 border-dashed border-black">
        {Array.from(new Array(5).keys())
          .reverse()
          .map((i) => {
            const occurences = ratings.filter(
              ({ score }) => score === i + 1
            ).length;
            return (
              <div className="flex items-center gap-2 font-bold">
                <div className="w-8 flex items-center gap-0.5 justify-between">
                  <p>{i + 1}</p>
                  <FaStar />
                </div>
                <Jauge
                  percentage={(occurences / ratings.length) * 100}
                  className="flex-1"
                />
                <p className="w-2">{occurences}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default RatingScore;
