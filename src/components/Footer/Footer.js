import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import social icons
const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex flex-col items-center justify-center w-full h-20 text-center bg-slate-300">
      <div className="flex items-center justify-center">
        <FaInstagram className="w-6 h-6 mr-2" />
        <p className="text-start">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.ietlucknow.ac.in"
          >
            Follow us on Instagram
          </a>{" "}
        </p>
      </div>
      <div>
        Made With Love by{" "}
        <a
          href="https://ietlucknow.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500"
        >
          Breeze
        </a>
      </div>
      <div className="flex">
        <a
          href="https://www.ietlucknow.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800"
        >
          https://www.ietlucknow.ac.in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
