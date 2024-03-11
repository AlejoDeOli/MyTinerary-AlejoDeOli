import React from 'react'

const CarrouselItems = ({arrayCities}) => {
  return (
    <div className="flex justify-center flex-wrap w-1/2 sm:2/3 2xl:w-2/5 gap-5 mb-16">
          {arrayCities.map((city) => (
            <article className="border border-solid shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]" key={city.name}>
              <img className="w-28 h-28 sm:w-64 sm:h-72 object-cover" src={city.image} alt="" />
              <footer className="">
                <h1 className="bg-black bg-opacity-40 text-white text-s sm:text-xl text-center font-semibold border-t border-solid">
                  {city.name}
                </h1>
                <p className="bg-black bg-opacity-40 text-white text-xs sm:text-sm text-center font-medium">
                  {city.country}
                </p>
              </footer>
            </article>
          ))}
        </div>
  )
}

export default CarrouselItems