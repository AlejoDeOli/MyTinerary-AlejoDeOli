import { createReducer } from "@reduxjs/toolkit"
import { filterByName, loadCities } from "../action/citiesActions"

const initialState = {
    allCities: [],
    filtered: [],
    search: ""
}



const citiesReducer = createReducer( initialState, (builder) => {
    builder.addCase( loadCities, (state, action) => {
        const newState = {...state}
        newState.allCities = action.payload
        newState.filtered = action.payload
        return newState
    } ).addCase( filterByName, (state, action) => {
         const aux = state.allCities.filter((city) => {
        return city.name.toLowerCase().startsWith( action.payload.toLowerCase().trim() )})
        return {...state, filtered: aux, search: action.payload}
    })
})

export default citiesReducer