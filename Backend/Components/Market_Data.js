import express from "express";
import yahoofinance from "yahoo-finance2";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5002;
app.use(cors());

app.get("/api/data", async (req, res) => {
  try {
    const { symbols } = req.query;
    if (!symbols) {
      return res.status(400).json({ error: "No symbols provided" });
    }
    const symbolList = symbols.split(",");
    const stockData = await Promise.all(
      symbolList.map(async (symbol) => {
        try {
          const quote = await yahoofinance.quote(symbol);
          return {
            symbol: quote.symbol,
            price: quote.regularMarketPrice,
            change: quote.regularMarketChangePercent,
          };
        } catch (error) {
          console.error(`Failed to fetch data for ${symbol}:`, error);
          return { symbol, error: "Failed to fetch data" };
        }
      })
    );
    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

const startServers = () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

export { app, startServers };
