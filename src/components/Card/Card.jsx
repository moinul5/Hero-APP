import React from "react";
import Download from "../../assets/icon-downloads.png";
import Star from "../../assets/icon-ratings.png";
import { useNavigate } from "react-router";

function AppCard({ image, id, name, downloads, rating }) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apps/${id}`)}
      className="border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition bg-white max-w-xs"
    >
      <div className="w-full h-60 bg-gray-200 rounded-lg mb-3 overflow-hidden">
        {image && (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        )}
      </div>

      <h3 className="font-semibold text-gray-900 text-lg mb-3">{name}</h3>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 bg-green-50 text-green-600 text-sm font-medium px-2 py-1 rounded-md">
          <img className="w-5" src={Download} alt="downloads" />
          <span>{downloads}</span>
        </div>

        <div className="flex items-center gap-1 bg-orange-50 text-orange-500 text-sm font-medium px-2 py-1 rounded-md">
          <img className="w-5" src={Star} alt="rating" />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default AppCard;
