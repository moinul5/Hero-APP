import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from 'react-router-dom';

function Root() {
    const navigation = useNavigation();

  return (
    // className="max-w-6xl mx-auto"
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
             <main className="flex-grow">

      {navigation.state === "loading" ? (
        <div className="flex-1 flex justify-center items-center mt-10">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex-1">
          <Outlet />
        </div>
      )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Root;
