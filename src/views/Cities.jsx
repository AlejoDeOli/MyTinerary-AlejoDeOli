import { useState, useEffect, useRef } from "react";
import { getCities } from "../services/citiesQueries"
import CardsCities from "../components/CardsCities"

export const Cities = () => {
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState([])
  const inputSerch = useRef(null)


    useEffect(() =>{
      getCities().then( (data) => {
        setCities(data)
        setFilters(data)
      })
    }, []);

    const handleInput = () =>{
      const filter = filterByName(cities, inputSerch.current.value)
      setFilters(filter)
    }
    
    const filterByName = (list, value) => list.filter((city) => 
    city.name.toLowerCase().startsWith( value.toLowerCase().trim() ))
    
  
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
          />
        </search>
        {filters.length > 0 && 
        filters.map((city) => (
          <CardsCities key={city._id} cities={city} />
        ))}
    </div>
    </main>
    </>
  )
}


export default Cities