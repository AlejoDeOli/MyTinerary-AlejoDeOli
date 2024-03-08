import { Link } from "react-router-dom";

const Hero = () =>{
    return(
        <section className="flex gap-16 flex-col justify-center items-center h-96 bg-[url('/public/paisaje2.jpg')] bg-cover bg-center shadow-[0_0_40px_0_rgba(0,0,0,1)] z-10">
        <h1 className="text-2xl sm:text-5xl font-bold">MyTinerary</h1>
        <h2 className="text-lg w-56 sm:w-auto sm:text-3xl p-0.5 text-slate-700 italic font-semibold bg-white bg-opacity-70 rounded">"Find your perfect trip, designed by insiders who know and love their cities"</h2>
        <Link className="text-lg sm:text-2xl text-black font-medium p-1 bg-[#9BB5BF] bg-opacity-90 rounded border-2 border-solid" to="/Cities">Travel To Your Dreams</Link>
      </section>
    );
};


export default Hero