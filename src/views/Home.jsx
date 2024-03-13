import Hero from "../components/Hero";
import Carrousel from "../components/Carrousel";
import { getCities } from "../services/citiesQueries";
import { useEffect, useState } from "react";

const Home = () => {
  const [cities, setCities] = useState([]);
  const [citiesSelected, setCitiesSelected,] = useState([])

  useEffect(() =>{
    getCities().then( (data) => {
      setCities(data)
      setCitiesSelected([data.slice(0, 4), data.slice(4, 8), data.slice(8, 12)])
    })
  }, []);

  

  return (
    <>
      <Hero />
      <main className="grow bg-[#176A73]">
        
        {!(cities.length > 0) ? <h2>loading</h2> : <Carrousel citys={citiesSelected} />}
      </main>
    </>
  );
};

export default Home;