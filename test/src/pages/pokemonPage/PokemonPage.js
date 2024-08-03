import React, {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPokemons} from "../../store/PokemonSlice";

const PokemonPage = () => {
    const pokemon = useSelector(state => state.pokemonReducer.pokemon)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
    },[])

    return (
        <div style={{margin:'0 auto',width:'810px',display:'flex',flexWrap:'wrap',gap:'10px',rowGap:'20px'}}>
            {pokemon && pokemon.map((pokemon,idx)=>(
                <div key={idx} style={{borderRadius:'10px',alignItems:'center',display:'flex',justifyContent:'space-between',backgroundColor:'blue', width:'400px'}}>
                    <img  src={pokemon.url} alt="pokemon"/>
                    <p>{pokemon.name}</p>
                </div>
            ))}
        </div>
    );
};

export default PokemonPage;