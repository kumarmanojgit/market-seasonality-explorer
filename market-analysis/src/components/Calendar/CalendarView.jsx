import React, { useState } from "react";
import dayjs from "dayjs";
import CalendarCell from "./CalendarCell";
import Tooltip from "./Tooltip";

const CalendarView = ({ data, view = "month", onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [hoveredDate, setHoveredDate] = useState(null);

  const generateDates = () => {
    const startOfMonth = currentDate.startOf("month").startOf("week");
    const endOfMonth = currentDate.endOf("month").endOf("week");
    const dates = [];
    let date = startOfMonth.clone();

    while (date.isBefore(endOfMonth, "day") || date.isSame(endOfMonth, "day")) {
      dates.push(date.clone());
      date = date.add(1, "day");
    }
    return dates;
  };

  const dates = generateDates();

  return (
    <div>
      {/* Navigation */}
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
        >
          &lt;
        </button>
        <h2 className="text-lg font-bold">{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={() => setCurrentDate(currentDate.add(1, "month"))}>
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dates.map((date) => {
          const metrics = data.find((d) => dayjs(d.time).isSame(date, "day"));
          return (
            <CalendarCell
              key={date.toString()}
              date={date}
              metrics={metrics}
              onHover={setHoveredDate}
              onClick={() => onSelectDate(metrics)}
            />
          );
        })}
      </div>

      {hoveredDate && (
        <Tooltip date={hoveredDate.date} metrics={hoveredDate.metrics} />
      )}
    </div>
  );
};

export default CalendarView;
