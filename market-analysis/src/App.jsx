import React, { useEffect, useState } from "react";
import CalendarView from "./components/Calendar/CalendarView";
import DashboardPanel from "./components/DashboardPanel";
import { fetchHistoricalData } from "./services/api";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedDateData, setSelectedDateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [view, setView] = useState("month"); // "day", "week", "month"

  // Fetch historical Binance data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const rawData = await fetchHistoricalData(symbol, "1d", 90);

      // Enrich with volatility and percentage change
      const enriched = rawData.map((d) => {
        const change = ((d.close - d.open) / d.open) * 100;
        const volatility = (d.high - d.low) / d.open;
        return { ...d, change, volatility };
      });

      setData(enriched);
      setLoading(false);
    };

    loadData();
  }, [symbol]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading Market Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Market Seasonality Explorer</h1>
        <div className="flex gap-2">
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="BTCUSDT">BTC/USDT</option>
            <option value="ETHUSDT">ETH/USDT</option>
            <option value="BNBUSDT">BNB/USDT</option>
          </select>
          <select
            value={view}
            onChange={(e) => setView(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="day">Daily View</option>
            <option value="week">Weekly View</option>
            <option value="month">Monthly View</option>
          </select>
        </div>
      </header>

      {/* Calendar + Dashboard */}
      <div className="flex flex-1 gap-4">
        <div className="flex-1">
          <CalendarView
            data={data}
            view={view}
            onSelectDate={setSelectedDateData}
          />
        </div>
        {/* <DashboardPanel selectedData={selectedDateData} /> */}
        <DashboardPanel selectedData={selectedDateData} allData={data} />
      </div>
    </div>
  );
};

export default App;
