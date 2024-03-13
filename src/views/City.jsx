import { useParams, useNavigate, Link } from 'react-router-dom'
import { getACities } from '../services/citiesQueries';
import { useEffect, useState } from 'react';

const City = () => {
    const params = useParams();
    const [city, setCity] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect( () => {
        getACities(params.id).then( (res) => {
            if(res._id){
                setCity(res)
            }else{
                alert (`City not available`)
                navigate("/Cities")
            }
        })
        .finally(() => setLoading(false))
    }, [])
    
    if(loading){
        return(
            <>
            <main className='grow flex flex-col gap-5 justify-center items-center bg-slate-600'>
                <div>
                    <h1 className='font-semibold text-2xl'>Loading...</h1>
                </div>
            </main>
            </>
        )
    }


    return (
    <>
    <main className='grow bg-slate-600'>
        <div className='flex flex-col justify-center items-center mt-7'>
            <h1 className='text-3xl sm:text-5xl mb-2 text-white'>{city.name}</h1>
            <h2 className='text-xl sm:text-3xl mb-3 text-white italic'>{city.country}</h2>
            <img className='w-11/12 h-[450px] object-cover border border-solid border-white' src={city.image} alt="" />
            <Link to="/Cities" className='text-lg font-medium text-slate-200 underline'>Back To The Cities</Link>
        </div>
        <div className='mt-12'>
            <h1 className='text-center text-xl font-bold text-red-600'>Under Construction</h1>
        </div>
    </main>
    </>
  )
}

export default City