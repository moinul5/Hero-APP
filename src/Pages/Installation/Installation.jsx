import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Download from "../../assets/icon-downloads.png";
import Star from "../../assets/icon-ratings.png";
import ArrowDownUp from "../../assets/icon-review.png";

function MyInstallation() {
  const [apps, setApps] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(stored);
  }, []);

  const handleSort = (option) => {
    let sortedApps = [...apps];
    if (option === "downloadsHighLow") {
      sortedApps.sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads));
    } else if (option === "downloadsLowHigh") {
      sortedApps.sort((a, b) => parseInt(a.downloads) - parseInt(b.downloads));
    }
    setSortOption(option);
    setApps(sortedApps);
  };

  const handleUninstall = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast("App uninstalled successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001931] mb-3">
          Your Installed Apps
        </h1>
        <p className="mt-4 sm:mt-6 text-gray-500 text-base sm:text-lg lg:text-xl mb-10 sm:mb-20">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-700 font-medium">
          {apps.length} App{apps.length !== 1 ? "s" : ""} Found
        </p>

        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="border rounded-md px-3 py-1 text-sm focus:outline-none"
        >
          <option value="default">Sort By Downloads</option>
          <option value="downloadsHighLow">High - Low</option>
          <option value="downloadsLowHigh">Low - High</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {apps.length === 0 ? (
          <div className="text-center text-gray-500 mt-20 text-lg">
            No installed apps found
          </div>
        ) : (
          apps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white shadow-sm rounded-lg px-5 py-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-[#001931]">
                    {app.title || "App Name"}
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <img src={Download} alt="" /> {app.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={Star} alt="" /> {app.rating || "5"}
                    </span>
                    <span>{app.size || "258 MB"}</span>
                  </div>
                </div>
              </div>

              {/* Right: Uninstall */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-[#00D390] hover:bg-[#00b47a] text-white px-5 py-2 rounded-md font-semibold"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>

      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default MyInstallation;
