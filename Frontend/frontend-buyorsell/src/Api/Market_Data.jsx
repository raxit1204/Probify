import React, { useState, useEffect } from "react";
import Widget from "../Utils/Widget";

const Market_data = () => {
  const [stocks, setStocks] = useState([]);
  const [symbols, setSymbols] = useState("^BSESN,^NSEI,^NSEBANK,BTC-USD");

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

    fetchStockData();
    const interval = setInterval(fetchStockData, 1000);

    return () => clearInterval(interval);
  }, [symbols]);

  const widgetMapping = {
    "^BSESN": { index_name: "Sensex", index_exc: "BSE" },
    "^NSEI": { index_name: "Nifty", index_exc: "NSE" },
    "^NSEBANK": { index_name: "BankNifty", index_exc: "NSE" },
    "BTC-USD": { index_name: "Bitcoin", index_exc: "Crypto" },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stocks.map((stock) => (
        <Widget
          key={stock.symbol}
          index_name={widgetMapping[stock.symbol]?.index_name || stock.symbol}
          index_exc={widgetMapping[stock.symbol]?.index_exc || "Unknown"}
          price={`₹${stock.price}`}
          changes={`(${stock.change}%)`}
        />
      ))}
    </div>
  );
};

export default Market_data;
