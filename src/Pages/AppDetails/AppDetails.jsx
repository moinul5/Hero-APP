import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import Chart from "../../components/Chart/Chart";
 import { ToastContainer, toast } from 'react-toastify';

function AppDetails() {
  const AppsData = useLoaderData();
  const param = useParams();
  const idData = AppsData.find((data) => data.id === parseInt(param.id));
  const [clicked, setClicked] = useState(false);

  const handleInstall = () => {
    setClicked(true);
    toast("Thank you for installing the app");
  };

  return (
    <div className="max-w-6xl mx-20 mt-15">
      <div className="flex gap-10">
        <img src={idData.image} alt="" />
        <div>
          <div>
            <h1 className="text-4xl text-[#0019341] font-semibold">
              {idData.title}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Developed by{" "}
              <span className="text-[#6336BA] font-semibold ">
                {idData.companyName}
              </span>
            </p>
          </div>
          <div className="border-t border-gray-300">
            <div className="flex gap-10 my-8">
              <div>
                <img src={download} alt="" />
                <p className="text-sm text-gray-500">Downloads</p>
                <h1 className="text-2xl font-semibold">{idData.downloads}</h1>
              </div>
              <div>
                <img src={star} alt="" />
                <p className="text-sm text-gray-500">Average Ratiings</p>
                <h1 className="text-2xl font-semibold">{idData.ratingAvg}</h1>
              </div>
              <div>
                <img src={review} alt="" />
                <p className="text-sm text-gray-500">Total Reviews</p>
                <h1 className="text-2xl font-semibold">{idData.reviews}</h1>
              </div>
            </div>
            <button
              onClick={handleInstall}
              disabled={clicked} // this actually disables it
              className={`btn border-0 bg-[#00D390] text-white font-semibold rounded-sm 
              ${clicked ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {clicked ? "Installed" : `Install Now (${idData.size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="my-10 border-y-2 border-gray-300">
        <Chart ratings={idData.ratings} />
      </div>
      <div>
        <h1 className="font-semibold text-2xl mb-4">Description</h1>
        <div className="text-lg mb-10">{idData.description}</div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AppDetails;
