import React, { useContext } from "react";
import { languageContext } from "../App";

const About = () => {
  const { currentLang } = useContext(languageContext);
  return (
    <div
      name="about"
      className=" w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className=" pb-8 mt-20 lg:mt-0 md:mt-0 ">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            {currentLang.about.title}
          </p>
        </div>
        <p className=" text-xl mt-20 ">{currentLang.about.content}</p>
      </div>
    </div>
  );
};

export default About;
