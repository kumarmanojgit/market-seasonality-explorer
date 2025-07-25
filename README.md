# market-seasonality-explorer

# Create a Vite React project

npm create vite@latest market-seasonality-explorer<br>
cd market-seasonality-explorer<br>
npm install<br>

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

## 🚀 Features

### **1. Interactive Calendar**

- Displays historical data (volatility, volume, performance) across **daily, weekly, monthly** views.
- **Color-coded heatmap cells**:
  - Green → Low volatility
  - Yellow → Medium volatility
  - Red → High volatility
- Navigate months & years, select specific dates, or use **keyboard navigation** (arrows, enter, escape).

### **2. Visual Data Layers**

- **Volatility Heatmap**: Shows market volatility via cell colors.
- **Liquidity Visualization**:
  - **Combined Line + Bar Chart** (last 7-day trend & daily volume).
- **Performance Metrics**:
  - Price trends, percentage changes, highs/lows.
  - Positive → Green arrows, Negative → Red indicators.

### **3. Multi-Timeframe Analysis**

- **Daily View**: Intraday volatility, trading volume, percentage change.
- **Weekly Aggregation**: Summarized weekly stats.
- **Monthly Overview**: Trend spotting for longer-term analysis.

### **4. Dashboard Panel**

- Click any date to view:
  - Open, Close, High, Low prices
  - Trading volume & liquidity metrics
  - Volatility calculations
  - Historical price trend (last 7 days)

### **5. Interactive & Responsive**

- Tooltips with exact metrics on hover.
- Date range selection for deeper analysis.
- Works across **desktop and mobile** with responsive design.

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite + TailwindCSS
- **Data Source**: Binance API (free/public)
- **Charts**: Recharts (Line, Bar, Composed charts)
- **Calendar**: Custom React components with dayjs for date handling
