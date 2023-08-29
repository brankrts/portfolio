import React, { useContext, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { Link } from "react-scroll";
import LanguageSelector from "./LanguageSelector";
import { languageContext } from "../App";

const NavBar = () => {
  const { currentLang, setCurrentLang } = useContext(languageContext);
  const { home, about, skils, contact, projects } = currentLang.navbar;
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: home.title,
      navigation: home.navigation,
    },
    {
      id: 2,
      link: about.title,
      navigation: about.navigation,
    },
    {
      id: 3,
      link: projects.title,
      navigation: projects.navigation,
    },
    {
      id: 4,
      link: skils.title,
      navigation: skils.navigation,
    },
    {
      id: 5,
      link: contact.title,
      navigation: contact.navigation,
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className=" text-5xl font-signature ml-2 ">Baran Karataş</h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link, navigation }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={navigation} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <div className="flex items-center ">
          <MdOutlineLanguage className=" mr-[-5px]" />
          <LanguageSelector />
        </div>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, navigation }) => (
            <li
              key={id}
              className=" px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(false)}
                to={navigation}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <div className="flex items-center text-2xl ">
            <MdOutlineLanguage className=" mr-[-5px]" />
            <LanguageSelector />
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
