import React from "react";
import { HeatMapGrid } from "react-grid-heatmap"; // optional lib (or manual coloring)

const VolatilityHeatmap = ({ data }) => {
  const matrix = data.map((d) => [d.volatility]);
  return (
    <div className="p-2">
      <HeatMapGrid
        data={matrix}
        cellRender={(x, y, value) => `${(value * 100).toFixed(1)}%`}
      />
    </div>
  );
};

export default VolatilityHeatmap;
