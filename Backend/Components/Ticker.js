import express from "express";
import yahoofinance from "yahoo-finance2";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());

app.get("/api/stocks", async (req, res) => {
  try {
    const symbols = [
      "^BSESN",
      "^NSEBANK",
      "^NSEI",
      "TATAMOTORS.NS",
      "HDFCBANK.NS",
      "RELIANCE.NS",
      "BTC-USD",
    ];
    const stockData = await Promise.all(
      symbols.map(async (symbol) => {
        const quote = await yahoofinance.quote(symbol);
        return {
          symbol: quote.symbol,
          price: quote.regularMarketPrice,
          change: quote.regularMarketChangePercent,
        };
      })
    );
    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

const startServer = () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

export { app, startServer };
