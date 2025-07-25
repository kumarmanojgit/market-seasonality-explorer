import React from "react";

const Tooltip = ({ date, metrics }) => {
  if (!metrics) return null;

  return (
    <div className="fixed p-2 bg-white border rounded shadow text-xs pointer-events-none z-50">
      <div>{date.format("DD MMM YYYY")}</div>
      <div>Open: {metrics.open}</div>
      <div>Close: {metrics.close}</div>
      <div>High: {metrics.high}</div>
      <div>Low: {metrics.low}</div>
      <div>Volatility: {metrics.volatility.toFixed(2)}</div>
      <div>Change: {metrics.change.toFixed(2)}%</div>
    </div>
  );
};

export default Tooltip;
