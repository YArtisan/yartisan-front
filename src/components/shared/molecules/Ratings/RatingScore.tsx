import { IRating } from "@/types/interfaces";
import Jauge from "@atoms/Jauge";
import RatingStars from "@atoms/RatingStars";
import { getAverageRating } from "@utils/functions";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function RatingScore({ ratings }: { ratings: IRating[] }) {
  const { t } = useTranslation("ratings");
  const avg = getAverageRating(ratings);
  const hasTwoDecimals = (avg * 100) % 10 === 0;

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {ratings.length > 0 && (
          <p className="text-3xl font-bold">
            {hasTwoDecimals ? avg : avg.toFixed(1)}
          </p>
        )}
        <RatingStars number={avg} className="text-3xl text-yellow-400" filled />
        <p className="italic underline">
          {t(ratings.length > 1 ? "reviews_plural" :"reviews", { count: ratings.length })}
        </p>
      </div>
      {ratings.length > 0 && (
        <div className="flex flex-col gap-1 mb-6">
          {Array.from(new Array(5).keys())
            .reverse()
            .map((i) => {
              const occurences = ratings.filter(
                ({ score }) => parseInt(score) === i + 1
              ).length;

              return (
                <div
                  key={`score-${i + 1}-stars`}
                  className="flex items-center gap-2 font-bold"
                >
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
      )}
    </>
  );
}

export default RatingScore;