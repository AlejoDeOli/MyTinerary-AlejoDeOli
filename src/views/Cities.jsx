import { useState, useEffect, useRef } from "react";
import { getCities } from "../services/citiesQueries"
import CardsCities from "../components/CardsCities"
import { useSelector, useDispatch } from "react-redux";
import { filterByName, loadCities } from "../redux/action/citiesActions";

export const Cities = () => {

  const inputSerch = useRef(null)


  const dispatch = useDispatch()


  const {allCities, filtered, search} = useSelector( (store) => store.cities)


    useEffect(() =>{
      if(allCities.length == 0){
      getCities().then( (data) => {
        dispatch(loadCities(data))
      })}
    }, []);


    const handleInput = () =>{
      dispatch(filterByName(inputSerch.current.value))
    }
    
  
  return (
    <>
    <main className='grow flex flex-col gap-5 justify-center items-center bg-slate-600'>
    <div className="w-full flex justify-center flex-wrap gap-7 mb-12">
        <h2 className='w-full text-center text-4xl text-white font-semibold mt-5 italic'>Cities</h2>
        <search className="w-full flex justify-center">
          <input 
          className="w-5/12 sm:w-80 border border-solid border-black shadow-[0px_2px_2px_1px_rgba(0,0,0,1)]" 
          type="text" 
          name="Name_city"
          onInput={handleInput}
          ref={inputSerch}
          defaultValue={search}
          />
        </search>
        {filtered.length > 0 && 
        filtered.map((city) => (
          <CardsCities key={city._id} cities={city} />
        ))}
    </div>
    </main>
    </>
  )
}


export default Cities