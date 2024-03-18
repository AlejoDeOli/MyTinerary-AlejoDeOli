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







{/* <div>
<h1 className='text-2xl text-white italic'>{itineraries[0].title}</h1>
<h2 className='text-lg text-slate-200'>{itineraries[0].description}</h2>
    <img className='border border-solid my-5' src={itineraries[0].guide_image} alt="" />
    <h1 className='text-xl text-slate-200 font-bold'>{itineraries[0].guide}</h1>
    <h2 className='text-lg text-white'>{itineraries[0].price} 💸💸💸💸</h2>
<h3 className='text-lg text-slate-200'>{itineraries[0].duration} Hours</h3>
 <h4 className='text-white'>{itineraries[0].hashtags}</h4>
<img className='h-[425px] w-full mb-5 object-cover border-2 border-black border-solid' src={itineraries[0].activities[0]} alt="" />
<img className='h-[425px] w-full mb-5 object-cover border-2 border-black border-solid' src={itineraries[0].activities[1]} alt="" />
<img className='h-[425px] w-full mb-5 object-cover border-2 border-black border-solid' src={itineraries[0].activities[2]} alt="" />
</div>
<div className=''>
<h1>{itineraries[1].title}</h1>
<h2>{itineraries[1].description}</h2>
    <img className='border border-solid' src={itineraries[1].guide_image} alt="" />
    <h1>{itineraries[1].guide}</h1>
    <h2>{itineraries[1].price} 💸💸💸</h2>
<h3>{itineraries[1].duration}</h3>
<h4 className='text-[10px] sm:text-base'>{itineraries[1].hashtags}</h4>
<img className='h-[425px] w-full mb-5 object-cover border-2 border-black border-solid' src={itineraries[1].activities[0]} alt="" />
<img className='h-[425px] w-full mb-5 object-cover border-2 border-black border-solid' src={itineraries[1].activities[1]} alt="" />
<img className='h-[425px] w-full mb-5 object-cover border-2 border-black border-solid' src={itineraries[1].activities[2]} alt="" />
</div> */}
