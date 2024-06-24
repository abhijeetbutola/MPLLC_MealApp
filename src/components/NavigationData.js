import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";

export const NavigationData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Menu",
    path: "/menu",
    icon: <IoIcons.IoFastFoodSharp />,
    cName: "nav-text",
  },
  {
    title: "My Favourites",
    path: "/favourites",
    icon: <FaIcons.FaStar />,
    cName: "nav-text",
  },
  {
    title: "Random Meal",
    path: "/randommeal",
    icon: <FaIcons.FaRandom />,
    cName: "nav-text",
  },
  {
    title: "About Me",
    path: "/aboutme",
    icon: <FaIcons.FaUser />,
    cName: "nav-text mt-auto",
  },
];
