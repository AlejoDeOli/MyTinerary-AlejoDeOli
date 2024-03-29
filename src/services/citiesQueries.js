import axios from "axios"

export const getCities = async () =>{
    try{
        const respuesta = await axios ("http://localhost:4000/api/cities")
        return respuesta.data.data
    }catch( err){
        return []
    }
}



export const getACities = async (_id) => {
   try {
        const result = await axios(`http://localhost:4000/api/cities/` + _id)
        return result.data.data
   } catch (error) {
        return {error}
   }
}