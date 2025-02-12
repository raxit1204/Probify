import React, { Suspense } from "react";
import Marquee from "react-fast-marquee";

const StockTicker = React.lazy(() => import("../../Api/TickerApi"));

function Ticker() {
  return (
    <div className="bg-primary-600 text-white py-2">
      <div className="max-w-7xl mx-auto">
        <Marquee pauseOnHover={true} speed={40} gradient={false}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-8">
                <div className="animate-pulse text-primary-100">
                  Loading market data...
                </div>
              </div>
            }
          >
            <StockTicker />
          </Suspense>
        </Marquee>
      </div>
    </div>
  );
}

export default Ticker;
