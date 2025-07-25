import React from "react";
import LiquidityChart from "./Charts/LiquidityChart";
import PerformanceChart from "./Charts/PerformanceChart";

const DashboardPanel = ({ selectedData, allData }) => {
  if (!selectedData) {
    return (
      <div className="w-1/3 p-4 bg-gray-50 border rounded">
        <p>Select a date to see details</p>
      </div>
    );
  }

  // Find index of selected date in the full dataset
  const selectedIndex = allData.findIndex((d) => d.time === selectedData.time);

  // Get a 7-day window around selected date (3 before, 3 after)
  const start = Math.max(0, selectedIndex - 3);
  const end = Math.min(allData.length, selectedIndex + 4);

  const history = allData.slice(start, end).map((d) => ({
    time: new Date(d.time).toLocaleDateString(),
    volume: d.volume,
    close: d.close,
  }));

  return (
    <div className="w-1/3 p-4 bg-gray-50 border rounded overflow-auto">
      <h2 className="text-lg font-bold mb-2">
        Details for {new Date(selectedData.time).toDateString()}
      </h2>
      <p>Open: {selectedData.open}</p>
      <p>Close: {selectedData.close}</p>
      <p>High: {selectedData.high}</p>
      <p>Low: {selectedData.low}</p>
      <p>Volume: {selectedData.volume}</p>
      <p>Volatility: {selectedData.volatility.toFixed(3)}</p>
      <p>Change: {selectedData.change.toFixed(2)}%</p>

      {/* Combined Liquidity Chart */}
      <LiquidityChart data={history} />

      {/* Performance (closing price trend) */}
      <PerformanceChart data={history} />
    </div>
  );
};

export default DashboardPanel;
