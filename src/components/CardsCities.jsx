import {Link} from 'react-router-dom'

const CardsCities = ({cities}) => {
  return (
      <article className="border border-solid shadow-[1px_7px_7px_1px_rgba(0,0,0,1)] rounded-lg" key={cities.name}>
                <Link to={"/Cities/" + cities._id}>
              <img className="w-28 h-28 sm:w-64 sm:h-72 lg:w-80 lg:h-96 object-cover rounded-lg" src={cities.image} alt="" />
              <footer className="">
                <h1 className="bg-black bg-opacity-40 text-white text-s sm:text-xl lg:text-2xl text-center font-semibold border-t border-solid">
                  {cities.name}
                </h1>
                <p className="bg-black bg-opacity-40 text-white text-xs sm:text-sm lg:text-base text-center font-medium">
                  {cities.country}
                </p>
              </footer>
                </Link>
            </article>
  )
}

export default CardsCities