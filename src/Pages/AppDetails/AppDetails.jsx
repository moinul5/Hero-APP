import React, { useState } from "react";
import { Navigate, useLoaderData, useParams } from "react-router-dom";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import Chart from "../../components/Chart/Chart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppNotFound from "../../assets/App-Error.png";
import { useNavigate } from "react-router-dom";

function AppDetails() {
  const AppsData = useLoaderData();
  const param = useParams();
  const idData = AppsData.find((data) => data.id === parseInt(param.id));
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleInstall = () => {
    setClicked(true);
    toast("Thank you for installing the app!");

    let installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    installed.push(idData);
    localStorage.setItem("installedApps", JSON.stringify(installed));
  };

  if (!idData) {
    return (
      <div className="text-center text-gray-500 mt-20 text-xl">
        <img className="mx-auto" src={AppNotFound} alt="" />
        <div onClick={() => navigate(-1)}>Go Back</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-15 px-6">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={idData.image}
          alt={idData.title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <div>
          <h1 className="text-4xl text-[#001934] font-semibold">
            {idData.title}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-[#6336BA] font-semibold">
              {idData.companyName}
            </span>
          </p>

          <div className="border-t border-gray-300 mt-5 pt-5">
            <div className="flex gap-10 flex-wrap my-8">
              <div>
                <img src={download} alt="downloads" />
                <p className="text-sm text-gray-500">Downloads</p>
                <h1 className="text-2xl font-semibold">{idData.downloads}</h1>
              </div>
              <div>
                <img src={star} alt="rating" />
                <p className="text-sm text-gray-500">Average Rating</p>
                <h1 className="text-2xl font-semibold">{idData.ratingAvg}</h1>
              </div>
              <div>
                <img src={review} alt="review" />
                <p className="text-sm text-gray-500">Total Reviews</p>
                <h1 className="text-2xl font-semibold">{idData.reviews}</h1>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={clicked}
              className={`btn border-0 bg-[#00D390] text-white font-semibold rounded-sm px-6 py-2
                ${
                  clicked
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#00b87c]"
                }`}
            >
              {clicked ? "Installed" : `Install Now (${idData.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="my-10 border-y-2 border-gray-300 py-6">
        <Chart ratings={idData.ratings} />
      </div>

      <div className="mb-10">
        <h1 className="font-semibold text-2xl mb-4">Description</h1>
        <div className="text-lg text-gray-700">{idData.description}</div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AppDetails;
