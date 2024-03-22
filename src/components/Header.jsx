import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { login, logout } from "../redux/action/userAction";
import { useEffect, useState } from "react";

const Header = () => {
  const user = useSelector((store) => store.user.user);
  const location = useLocation();
  const dispatch = useDispatch();


const links = [
      { path: "/", 
      title: "Home", 
      active: "/" == location.pathname, 
      visable: true },
      {
        path: "/Cities",
        title: "Cities",
        active: "/Cities" == location.pathname,
        visable: true
      },
      {
        path: "/SignUp",
        title: "SignUp",
        active: "/SignUp" == location.pathname,
        visable: user.first_name ? false : true
      },
      { path: "/Login", 
      title: "Login", 
      active: "/Login" == location.pathname, 
      visable: user.first_name ? false : true },
    ]
  

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <header className="text-white w-full h-30 bg-[#176A73] flex justify-around shadow-[0_0_40px_0_rgba(0,0,0,1)] z-10">
      <h1 className="m-2 sm:m-5 text-sm sm:text-4xl font-semibold font-['Open_Sans'] flex items-center flex-row">
        MyTinerary
      </h1>
      <nav className="flex items-center gap-2 sm:gap-10 m-5">
        {links.map((link) => (
          <Anchor key={link.title} link={link} />
        ))}
        <img
          className="flex w-4 h-4 sm:w-12 sm:h-12"
          src="/public/perfil4.png"
          alt=""
        />
        {user.first_name && (
          <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xs sm:text-base lg:text-xl font-semibold">{user.first_name}</p>
          <button
            onClick={handleClick}
            className="text-xs sm:text-lg border border-solid bg-slate-600 p-1 text-red-500 font-semibold"
          >
            Logout
          </button>
          </div>
        )}
      </nav>
    </header>
  );
};

const Anchor = ({ link }) => {
  if(link.visable){
    return (
      <Link
        key={link.title}
        className={`text-xs hover:scale-95 sm:text-2xl font-medium ${
          link.active ? "border-b-4 border-solid" : ""
        }`}
        to={link.path}
      >
        {link.title}
      </Link>
    );
  }
  
};

export default Header;
