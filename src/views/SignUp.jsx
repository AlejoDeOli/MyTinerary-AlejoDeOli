import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCountries } from "../services/countriesQueries"
import authQueries from "../services/authQueries";
import alerts from "../utils/toastify"

function SignUp() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
    })

    const [countries, setCountries] = useState([])
    const navigate = useNavigate()

    useEffect( () => {
        getAllCountries().then(setCountries);
    }, [])

    function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        const aux = {...formData}
        aux[name] = value;
        setFormData(aux);
    }

    function handleSubmit(e){
        e.preventDefault();
        const aux = {...formData}
        for (const key in aux) {
            if (!aux[key]) delete aux[key]
        }
        authQueries.register(aux).then((response) => {
            if(response.status == 201){
                alerts.success("Created Account")
                navigate("/Login")
            }else{
                alerts.error(response.statusMsg)
            }
        })
    }

  return (
    <main className="grow flex flex-col justify-center items-center gap-7 bg-slate-600">
      <h1 className="text-4xl text-slate-200 font-semibold">Sing Up</h1>
      <div className="border w-8/12 sm:w-4/12 h-2/6 p-5 flex flex-col items-center bg-slate-700">
        <form 
        onSubmit={handleSubmit}
        onInput={handleInput}
        className="w-full text-zinc-950 flex flex-col gap-5 items-center py-5"
        >
          <input
            type="text"
            placeholder="Name"
            name="first_name"
            className="w-9/12 h-8 outline-double ps-4"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            className="w-9/12 h-8 p-2 outline-double ps-4"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-9/12 h-8 p-2 outline-double ps-4"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-9/12 h-8 p-2 outline-double ps-4"
          />
          <select className=" w-9/12 h-8 outline-double ps-4" name="country">
            <option value="" selected disabled>Select Country</option>
            {countries.length > 0 && countries.map( (country) => (<option key={country} value={country}>{country}</option>)) }
          </select>
          <input
            type="text"
            placeholder="Url Image"
            name="image"
            className="w-9/12 h-8 p-2 outline-double ps-4"
          />
          <input
            type="submit"
            className="bg-white w-24 sm:w-40 h-8 font-semibold text-lg"
            value="Submit"
          />
        </form>
        <Link
          className="flex justify-center items-center bg-sky-700 border border-solid h-12 w-32 sm:w-52 font-semibold text-lg rounded shadow-[0px_2px_2px_1px_rgba(0,0,0,1)]"
          to="/Login"
        >
          Login
        </Link>
      </div>
    </main>
  );
}

export default SignUp;
