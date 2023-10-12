import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css'
const Header = () => {
  return (
   
      <header className="flex items-center justify-center bg-slate-500">
        <div className="">LOGO</div>

        <div className="flex items-end justify-end">
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/About"> About </Link>
              </li>
              <li>
                <Link to="/Events"> Events </Link>
              </li>
              <li>
                <Link to="/Clubs"> Clubs </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </header>
   
  );
};

export default Header;
