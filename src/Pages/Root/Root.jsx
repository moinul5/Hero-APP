import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    // className="max-w-6xl mx-auto"
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
             <main className="flex-grow">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Root;
