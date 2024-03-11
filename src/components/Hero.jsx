import { Link } from "react-router-dom";

const Hero = () =>{
    return(
        <section className="flex gap-16 flex-col justify-evenly items-center h-96 bg-[url('/public/paisaje2.jpg')] bg-cover bg-center shadow-[0_0_40px_0_rgba(0,0,0,1)] z-20">
        <h1 className="text-2xl mb-5 sm:text-5xl font-bold">MyTinerary</h1>
        <h2 className="text-lg  w-56 sm:w-auto sm:text-3xl p-0.5 text-white italic font-semibold bg-black bg-opacity-40 rounded">"Find your perfect trip, designed by insiders who know and love their cities"</h2>
        <Link className="text-lg sm:text-2xl text-black font-medium p-1 bg-[#9BB5BF] bg-opacity-90 rounded border-2 border-solid" to="/Cities">Travel To Your Dreams</Link>
      </section>
    );
};


export default Hero