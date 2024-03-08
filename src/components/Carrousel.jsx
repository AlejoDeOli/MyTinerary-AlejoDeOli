import React, { useState } from "react";
import CarrouselItems from "./CarrouselItems";

export const Carrousel = ({citys}) => {
  const [arrayCities, setArraycities] = useState(citys[0]);
  const [index, setIndice] = useState(0);

  const next = () => {
    let aux = index == 2 ? 0 : index + 1;
    setIndice(aux);
    setArraycities(citys[aux]);
  };
  const prev = () => {
    let aux = index == 0 ? 2 : index - 1;
    setIndice(aux);
    setArraycities(citys[aux]);
  };

  return (
    <div className="flex flex-wrap justify-center h-full">
      <h1 className="text-3xl w-full text-center text-slate-100 font-semibold mt-8 mb-8">
        Popular MYTINERARIES!
      </h1>
      <button className="mb-16" onClick={prev}>
        ⬅
      </button>
      <CarrouselItems arrayCities={arrayCities} />
      <button className="mb-16" onClick={next}>
        ➡
      </button>
    </div>
  );
};

export default Carrousel