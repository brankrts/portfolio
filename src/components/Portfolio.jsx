import React, { useContext } from "react";
import ITL from "../assets/portfolio/ITL.png";
import Museum from "../assets/portfolio/museum.png";
import DataBus from "../assets/portfolio/data_bus.png";
import realEstate from "../assets/portfolio/real_estate.png";
import PBB from "../assets/portfolio/PBB.png";
import sudoku from "../assets/portfolio/sudoku.png";
import { languageContext } from "../App";

const Portfolio = () => {
  const { currentLang } = useContext(languageContext);
  const { projects } = currentLang;
  const portfolios = [
    {
      id: 1,
      src: ITL,
      url: "https://github.com/brankrts/Intelligent-Traffic-Light",
    },

    {
      id: 2,
      src: sudoku,
      url: "https://github.com/brankrts/Sudoku-Solver-with-OpenCV-and-CNN-in-Python",
    },

    {
      id: 3,
      src: realEstate,
      url: "https://github.com/brankrts/web-tabanli-teknolojiler-final-odevi-",
    },

    {
      id: 4,
      src: PBB,
      url: "https://github.com/brankrts/bartinuniversitesi_pbb_mobil",
    },

    {
      id: 5,
      src: DataBus,
      url: "https://github.com/brankrts/basic-computer-databus",
    },

    {
      id: 6,
      src: Museum,
      url: "https://github.com/brankrts/Ibeacon-based-interactive-Museum-mobile-app",
    },
  ];
  return (
    <div
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      name="projects"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col w-full justify-center h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            {projects.title}
          </p>
          <p className=" py-6">{projects.description}</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border rounded-lg">
                  <a href={url} target="_blank" rel="noreferrer">
                    {projects.code}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
