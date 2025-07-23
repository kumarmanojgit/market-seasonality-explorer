# market-seasonality-explorer

# Create a Vite React project

npm create vite@latest market-seasonality-explorer
cd market-seasonality-explorer
npm install

# Install dependencies

npm install react-router-dom recharts axios dayjs classnames react-calendar

# Project structure

src/<br>
components/<br>
|-- Calendar/<br>
| |-- CalendarView.jsx #Displays full interactive calendar<br>
| |-- CalendarCell.jsx #Renders each date cell with data<br>
| |-- Tooltip.jsx #Tooltip for extra details<br>
|<br>
|-- Charts/<br>
| |-- VolatilityHeatmap.jsx #Volatility visualization<br>
| |-- LiquidityChart.jsx #Liquidity chart<br>
| |-- PerformanceChart.jsx #Performance analysis chart<br>
|<br>
|-- DashboardPanel.jsx #Combines calendar and charts<br>
<br>
services/<br>
|-- api.js #Fetch orderbook & market data<br>
|-- binance.js #Binance API integration<br>
|<br>
pages/<br>
|-- Home.jsx #Home page with DashboardPanel<br>
|<br>
|-- App.jsx #Main app component<br>
|-- main.jsx #React entry point<br>
