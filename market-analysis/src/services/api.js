import axios from "axios";

export const fetchHistoricalData = async (
  symbol = "BTCUSDT",
  interval = "1d",
  limit = 90
) => {
  const res = await axios.get("https://api.binance.com/api/v3/klines", {
    params: { symbol, interval, limit },
  });

  return res.data.map((d) => ({
    time: d[0],
    open: parseFloat(d[1]),
    high: parseFloat(d[2]),
    low: parseFloat(d[3]),
    close: parseFloat(d[4]),
    volume: parseFloat(d[5]),
  }));
};
