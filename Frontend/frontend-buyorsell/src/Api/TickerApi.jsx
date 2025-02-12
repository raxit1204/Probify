import React, { useState, useEffect } from "react";
import axios from "axios";

const StockTicker = () => {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  const fetchStockData = async () => {
    try {
      const response = await axios.get("/api/stocks");
      const data = Array.isArray(response.data) ? response.data : [];
      setStocks(data);
    } catch (err) {
      setError("Failed to fetch stock data");
      setStocks([]);
    }
  };

  useEffect(() => {
    fetchStockData();
    const interval = setInterval(fetchStockData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-8">
      {error && <p className="text-red-600">{error}</p>}
      {stocks.map((stock, index) => (
        <div key={index} className="flex items-center space-x-3">
          <span className="font-semibold">{stock.symbol}</span>
          <span
            className={`${
              stock.change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ₹{stock.price.toFixed(2)}
            <span className="ml-1">
              ({stock.change >= 0 ? "+" : ""}
              {stock.change.toFixed(2)}%)
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default StockTicker;
