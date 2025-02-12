import React from "react";

const Widget = ({ index_name, index_exc, price, changes }) => {
  const isPositive = !changes.includes("-");

  return (
    <div className="transform transition-all duration-300 hover:scale-105">
      <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover p-6 backdrop-blur-sm bg-opacity-80">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-primary-800 mb-1">
              {index_name}
            </h3>
            <p className="text-sm text-primary-500">{index_exc}</p>
          </div>

          <div className="mt-auto">
            <div className="text-xl font-semibold text-primary-900 mb-2">
              {price}
            </div>
            <div
              className={`text-sm font-medium ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {changes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
