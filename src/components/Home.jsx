import React from "react";
import Header from "./Header";
import { FaInstagram } from "react-icons/fa"; // Import social icons
const Home = () => {
  return (
    <>
    <Header/>
     <div className=" mt-80 flex items-center justify-center">
      <img 
      className="fixed items-center justify-center"
      src="https://cdn.discordapp.com/attachments/1032581665953943574/1162638929753813032/Untitled-1.png?ex=653caae1&is=652a35e1&hm=61362364b61077158b928c32b9514db6f9cfe16dfd80da5dfd5223957c2c1d3d&" alt="LOGO" />
     
     </div>
     <p className="flex items-center justify-center pt-40">issacc ka full form</p>
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
    </>
  );
};

export default Home;
