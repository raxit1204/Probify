import React, { useState, useEffect } from "react";

const Search_Ticker = () => {
  const [stocks, setStocks] = useState([]);
  const [symbols, setSymbols] = useState("AAPL,GOOGL,MSFT"); // Default symbols

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5002/api/data?symbols=${symbols}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch stock data");
        }
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStockData(); // Fetch initially
    const interval = setInterval(fetchStockData, 1000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [symbols]);

  return (
    <div>
      <h2>Live Stock Prices</h2>
      <input
        type="text"
        value={symbols}
        onChange={(e) => setSymbols(e.target.value)}
        placeholder="Enter symbols (comma separated)"
      />
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.symbol}: ₹{stock.price} ({stock.change}%)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search_Ticker;
