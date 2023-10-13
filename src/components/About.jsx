import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import social icons

const About = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold text-center text-blue-400 pt-11">
        About <span className="text-gray-300">ISSAC</span>
      </h2>

      <div className="flex items-center justify-center mt-10">
        <p className="p-3 text-justify border border-neutral-950 mr-80 ml-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eligendi, error modi veniam necessitatibus labore fugiat ducimus
          asperiores expedita soluta distinctio qui aliquam mollitia unde
          perferendis ea, animi incidunt itaque. Expedita atque provident
          quibusdam recusandae adipisci perspiciatis repellendus molestias
          blanditiis dicta voluptatibus quis corporis aperiam quae at quaerat
          aspernatur veritatis cupiditate tempore vero, iusto, earum odio nobis
          illum. Facilis nostrum deleniti voluptatem alias fugiat hic qui beatae
          veritatis id ducimus ex vero ratione quaerat necessitatibus eum
          inventore, reprehenderit earum. Adipisci eligendi, ipsa rerum officia
          ex nulla veniam vero quas eaque doloribus quam quo, autem totam natus
          corporis quia voluptatem maiores.
        </p>
      </div>

      {/* Footer Section */}
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
    </div>
  );
};

export default About;
