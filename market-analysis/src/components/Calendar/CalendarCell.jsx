import React from "react";
import classNames from "classnames";

const CalendarCell = ({ date, metrics, onHover, onClick }) => {
  const isToday = date.isSame(new Date(), "day");
  const volatilityColor =
    metrics?.volatility > 0.05
      ? "bg-red-300"
      : metrics?.volatility > 0.02
      ? "bg-yellow-300"
      : "bg-green-300";

  return (
    <div
      className={classNames(
        "p-2 h-20 rounded cursor-pointer flex flex-col justify-between border",
        volatilityColor,
        isToday && "ring-2 ring-blue-500"
      )}
      onMouseEnter={() => onHover({ date, metrics })}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
    >
      <div className="text-xs font-bold">{date.date()}</div>
      {metrics && (
        <div className="text-[10px]">
          <div>Vol: {metrics.volatility.toFixed(2)}</div>
          <div>Volm: {metrics.volume.toFixed(0)}</div>
          <div
            className={metrics.change >= 0 ? "text-green-600" : "text-red-600"}
          >
            {metrics.change.toFixed(2)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarCell;
