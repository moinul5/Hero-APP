import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Google from "../../assets/google-play.png";
import AppStore from "../../assets/app-store.png";
import Hero from "../../assets/hero.png";
import Card from "../../components/Card/Card";

function Home() {
  const AppsData = useLoaderData();

  return (
    <div>
      <div className="max-w-6xl mx-auto text-center mt-20">
        <h1 className="text-7xl font-bold text-[#001931] mb-2">We Build</h1>
        <h1 className="text-7xl font-bold text-[#001931]">
          <span className="text-[#784FC2]">Production</span> Apps
        </h1>
        <p className="mt-6 text-gray-500 text-xl">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex mb-10 max-w-6xl items-center mx-auto text-center justify-center mt-10">
        <Link
          className="border rounded shadow w-50 text-center mr-3 border-gray-300 p-3 flex items-center gap-2 "
          to={"https://play.google.com/"}
        >
          <img className="w-8" src={Google} alt="" />
          <h1 className="text-xl font-semibold">Google Play</h1>
        </Link>
        <Link
          className="border rounded shadow w-50 text-center mr-3 border-gray-300 p-3 flex items-center gap-2 "
          to={"https://www.apple.com/app-store/"}
        >
          <img className="w-8" src={AppStore} alt="" />
          <h1 className="text-xl font-semibold">App Store</h1>
        </Link>
      </div>

      <div>
        <img className="items-center mx-auto" src={Hero} alt="" />
        <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">
              Trusted By Millions, Built For You
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div>
                <p className="text-gray-200 text-sm mb-2">Total Downloads</p>
                <h3 className="text-5xl font-extrabold">29.6M</h3>
                <p className="text-gray-300 text-sm mt-1">
                  21% More Than Last Month
                </p>
              </div>

              <div>
                <p className="text-gray-200 text-sm mb-2">Total Reviews</p>
                <h3 className="text-5xl font-extrabold">906K</h3>
                <p className="text-gray-300 text-sm mt-1">
                  46% More Than Last Month
                </p>
              </div>

              <div>
                <p className="text-gray-200 text-sm mb-2">Active Apps</p>
                <h3 className="text-5xl font-extrabold">132+</h3>
                <p className="text-gray-300 text-sm mt-1">
                  31 More Will Launch
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto text-center mt-10">
        <h1 className="text-3xl sm:text-5xl font-bold mb-5 text-[#001931]">
          Trending Apps
        </h1>
        <p className="text-xl text-gray-500 mb-5">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-4 gap-6 mb-5">
          {AppsData.slice(0, 8).map((App) => (
            <Card
              key={App.id}
              id={App.id}
              image={App.image}
              name={App.title}
              rating={App.ratingAvg}
              downloads={App.downloads}
            />
          ))}
        </div>
        <Link
          to={"/apps"}
          className="btn bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white text-xl w-40 h-12 mb-10 rounded-xl"
        >Show All</Link>
      </div>
    </div>
  );
}

export default Home;
