const BINANCE_WS = "wss://stream.binance.com:9443/ws";

export function connectOrderBook(symbol = "btcusdt", callback) {
  const ws = new WebSocket(`${BINANCE_WS}/${symbol}@depth10@100ms`);
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    callback(data);
  };
  return ws;
}
