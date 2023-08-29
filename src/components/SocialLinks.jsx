import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/brankrts",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "Github",
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://www.github.com/brankrts",
      style: "",
    },
    {
      id: 3,
      name: "Mail",
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:brankrts@gmail.com",
      style: "",
    },
    /*{
      id: 4,
      name: "CV",
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
    */
  ];
  return (
    <div className="hidden flex-col top-[35%] left-0 fixed  lg:flex">
      <ul>
        {links.map(({ id, child, href, name, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-white"
              download={download}
            >
              {name}
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
