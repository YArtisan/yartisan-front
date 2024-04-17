import React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  percentage: number;
  jaugeColor?: string;
  backgroundColor?: string;
}

function Jauge({
  percentage,
  backgroundColor = "#dedede",
  jaugeColor = "#facc15",
  className,
  ...props
}: IProps) {
  return (
    <div
      {...props}
      className={["h-2 rounded", className].join(" ")}
      style={{ backgroundColor }}
    >
      <div
        style={{ width: `${percentage}%`, backgroundColor: jaugeColor }}
        className="h-full"
      ></div>
    </div>
  );
}

export default Jauge;
