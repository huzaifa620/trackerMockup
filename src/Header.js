import React from "react";
import logo from "./logo.svg";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const NavBar = ({ navBar, setNavBar }) => {

  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDark = () => {
    document.body.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  const darkClasses = "bg-gradient-to-r from-gray-800 to-gray-500 text-white";
  const lightClasses = "bg-[#fff] text-black";
  const [openMenu, setOpenMenu] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className={`items-center w-screen py-1 ${!darkMode ? lightClasses : darkClasses}
       ${ openMenu ? "w-screen z-10 fixed top-0 right-0 left-0 flex flex-col"
      : "w-screen h-auto z-10 fixed top-0 right-0 left-0 flex flex-col justify-between"
      }`
      }>

        <div className="flex px-4 md:px-[5%] items-center justify-between w-full lg:max-w-[90%]">

          <img src={logo} alt="" className="h-16 w-16 sm:w-32" />

          <div id="navbar" className="w-full space-x-8 hidden sm:flex h-full items-center justify-end text-md text-[#627d98] mr-12">

            <Link to="/">
              <div className={`text-xl font-semibold hover:text-gray-400 ${darkMode ? "text-white" : "text-[#696969] border-black"} ${navBar[0] === 1 && "border-b-2"}`}> Home </div>
            </Link>

            <Link to="/about">
              <div className={`text-xl font-semibold hover:text-gray-400 ${darkMode ? "text-white" : "text-[#696969] border-black"} ${navBar[1] === 1 && "border-b-2"}`}> About </div>
            </Link>

          </div>

          <div className="flex space-x-2">

            <div onClick={toggleDark}>
              {!darkMode ? ( <DarkModeIcon /> ) : ( <LightModeIcon /> )}
            </div>

            <div onClick={() => {setOpenMenu(!openMenu)}} className="sm:hidden">
              {openMenu ? ( <CloseIcon /> ) : ( <MenuIcon /> )}
            </div>

          </div>
          
        </div>

        {openMenu && (
          <div className="w-full h-fit bg-white md:hidden flex flex-col items-center font-bold p-4 text-[#627d98] text-xl space-y-2">

            <div className={`border w-[75%] text-center p-2 rounded-full bg-slate-600 ${navBar[0] === 1 ? "cursor-pointer text-white" : "cursor-pointer"}`}
              onClick={() => {
                setOpenMenu(false);
                navigate("/");
              }}
            >
              Home
            </div>

            <div className={`border w-[75%] text-center p-2 rounded-full bg-slate-600 ${navBar[0] === 1 ? "cursor-pointer text-white" : "cursor-pointer"}`}
              onClick={() => {
                setOpenMenu(false);
                navigate("/about");
              }}
            >
              About
            </div>

          </div>
        ) }

      </div>
    </>
  );
};

export default NavBar;