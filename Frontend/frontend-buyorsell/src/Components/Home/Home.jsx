import React from "react";
import Market_data from "../../Api/Market_Data";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-900 mb-2">
            Market Overview
          </h1>
          <p className="text-primary-600">
            Real-time market insights at your fingertips
          </p>
        </div>
        <Market_data />
      </div>
    </div>
  );
}

export default Home;
