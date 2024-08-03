import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



export const getPokemons = createAsyncThunk(
    'getPokemons',
    async function (info, {dispatch}) {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ ')
            const pokemons= await response.json()
            dispatch(pokemonInfo(pokemons.results))
        } catch (e) {
            console.log(e)
        }
    }
)



const pokemonSlice = createSlice({
    name:'pokemon',
    initialState:{
        pokemon:null
    },
    reducers:{
        pokemonInfo: (state, action) => {
            state.pokemon = action.payload
        },
    }

})

export const {pokemonInfo} = pokemonSlice.actions

export default pokemonSlice.reducer