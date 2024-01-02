import { getRandomNumber } from "@utils/functions";
import React from "react";
import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";

interface IProps {
  number: number;
  withScore?: boolean;
  filled?: boolean;
  className?: string;
}

const displayStars = (number: number, filled: boolean) => (
  <>
    {Array.from(new Array(Math.floor(number)).keys()).map(() => (
      <React.Fragment key={`rating-star-${getRandomNumber()}`}>
        {filled ? <FaStar /> : <FaRegStar />}
      </React.Fragment>
    ))}
  </>
);

function RatingStars({ number, className, filled, withScore }: IProps) {
  const hasTwoDecimals = (number * 100) % 10 !== 0;

  return (
    <div className={["flex items-center gap-1", className].join(" ")}>
      {withScore && (
        <p className="font-semibold text-black">
          {hasTwoDecimals ? number.toFixed(1) : number}
        </p>
      )}
      {displayStars(number, true)}
      {number % 1 !== 0 && (filled ? <FaStarHalfAlt /> : <FaStarHalf />)}
      {filled && displayStars(Math.floor(5 - number), false)}
    </div>
  );
}

export default RatingStars;
