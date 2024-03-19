import React from 'react'

const ItinerariesItems = ({itineraries}) => {
    function price(amount){
        let final = "";
        for (let i = 0; i < amount; i++) {
            final +="💸"  
        }
        return final;
    }
    
  return (
    <article key={itineraries._id}>
        <h1 className='text-lg sm:text-xl md:text-2xl text-white italic mb-2'>{itineraries.title}</h1>
        <h2 className='text-base sm:text-lg md:text-xl text-slate-200'>{itineraries.description}</h2>
        <img className='border border-solid my-5' src={itineraries.guide_image} alt="" />
        <h1 className='text-md sm:text-lg md:text-xl text-white font-bold'>{itineraries.guide}</h1>
        <h2 className='text-sm sm:text-base md:text-lg text-slate-200'>Price: {price(itineraries.price)}</h2>
        <h3 className='text-sm sm:text-base md:text-lg text-slate-200'>{itineraries.duration} Hours</h3>
        <h4 className='text-white text-[10px] sm:text-base lg:text-lg'>{itineraries.hashtags}</h4>
        <img className='h-[450px] w-full mb-5 object-cover border-2 border-black border-solid' src={itineraries.activities[0]} alt="" />
        <img className='h-[450px] w-full mb-5 object-cover border-2 border-black border-solid' src={itineraries.activities[1]} alt="" />
        <img className='h-[450px] w-full mb-5 object-cover border-2 border-black border-solid' src={itineraries.activities[2]} alt="" />
    </article>
  )
}

export default ItinerariesItems

