import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Header = () => {

  const location = useLocation()
  const links = [ 
    {path: "/", title: "Home", active: "/" == location.pathname},
    {path: "/Cities", title: "Cities", active: "/Cities" == location.pathname}
  ]


    return(
        <header className="text-white w-full h-30 bg-[#176A73] flex justify-around shadow-[0_0_40px_0_rgba(0,0,0,1)] z-10">
      <h1 className="m-5 text-sm sm:text-4xl font-semibold font-['Open_Sans'] flex items-center flex-row">MyTinerary</h1>
      <nav className="flex items-center gap-3 sm:gap-10 m-5">
        {links.map((link) => ( 
          <Link  key={link.title} className={`text-md hover:scale-95 sm:text-2xl font-medium ${link.active ? "border-b-4 border-solid" : ""}`} to={link.path}>{link.title}</Link>
        ))}
        <img className="flex w-8 h-8 sm:w-12 sm:h-12" src="/public/perfil4.png" alt="" />
      </nav>
     </header>
    );
};

export default Header;