import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="flex items-end justify-end bg-blue-900 h-[10vh]">
      <div className=" cursor-pointer absolute top-6 left-6">
        <Link
          to="/"
          className="p-2 text-white hover:border-blue-200 hover:text-gray-300 "
        >
          LOGO
        </Link>
      </div>

      <nav>
        <ul className="flex mb-6 mr-10 space-x-5">
          <li className="cursor-pointer"></li>
          <li className="cursor-pointer">
            <Link
              to="/About"
              className="p-2 text-white border border-transparent rounded-full hover:border-blue-200 hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/Events"
              className="p-2 text-white border border-transparent rounded-full hover:border-blue-200 hover:text-gray-300"
            >
              Events
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/Clubs"
              className="p-2 text-white border border-transparent rounded-full hover:border-blue-200 hover:text-gray-300"
            >
              Clubs
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/People"
              className="p-2 text-white border border-transparent rounded-full hover:border-blue-200 hover:text-gray-300"
            >
              People
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </header>
  );
};

export default Header;
