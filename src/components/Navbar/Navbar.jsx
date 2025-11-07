import React from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/apps"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"/installation"}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className=" text-xl">
          <Link to={"/"} className="flex items-center gap-3">
            <img className="w-10 ml-10" src={Logo} alt="" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 bg-clip-text text-transparent">
              Hero App
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md font-semibold">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/apps"}>Apps</NavLink>
          </li>
          <li>
            <NavLink to={"/installation"}>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"https://github.com/moinul5"}
          className="btn bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white mr-5"
        >
          <FaGithub />
          Contribute
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
