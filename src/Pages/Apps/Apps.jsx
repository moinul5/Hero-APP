import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";

function Apps() {
  const AppsData = useLoaderData();
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState(AppsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      if (input.trim() === "") {
        setFilteredData(AppsData);
      } else {
        const newData = AppsData.filter((data) =>
          data.title.toLowerCase().startsWith(input.toLowerCase())
        );
        setFilteredData(newData);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [input, AppsData]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mt-15">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001931] mb-3">
          Our All Applications
        </h1>
        <p className="mt-4 sm:mt-6 text-gray-500 text-base sm:text-lg lg:text-xl mb-10 sm:mb-20">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>


        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-5">
          <div className="font-semibold">
            ({filteredData.length}) Apps Found
          </div>
          <div className="w-full sm:w-auto">
            <label className="input border flex items-center gap-2 rounded-2xl border-gray-400 px-3 py-2 w-full sm:w-64">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search"
                className="outline-none w-full"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
          </div>
        </div>

        
        {loading ? (
          <div className="text-gray-500 font-semibold mt-10 animate-pulse">
            Searching...
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            gap-6 mb-5 mt-5"
          >
            {filteredData.length > 0 ? (
              filteredData.map((App) => (
                <Card
                  key={App.id}
                  id={App.id}
                  image={App.image}
                  name={App.title}
                  rating={App.ratingAvg}
                  downloads={App.downloads}
                />
              ))
            ) : (
              <div className="font-semibold mt-10 text-gray-400 col-span-full">
                No App Found!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Apps;
