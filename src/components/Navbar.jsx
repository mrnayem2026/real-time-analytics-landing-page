import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <a className="mt-4">
            <img src={logo}></img>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-xl mt-4 font-medium font-Montserrat items-center  space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                About
              </NavLink>
            </li>
            <li className="ml-10 ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Pricing
              </NavLink>
            </li>
            <li className="ml-10 ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="ml-10 ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="ml-10 ">
          <a className="btn normal-case text-xl mt-4 font-medium font-Montserrat rounded-3xl  px-8 text-center bg-base-100 text-[#722ED1] border-[#722ED1] hover:bg-[#722ED1] hover:text-white hover:border-0 transition duration-300 ease-in ">
            Start free trial
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
