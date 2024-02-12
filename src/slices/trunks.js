import React from 'react'
import { setPokemons, startLoadingPokemons } from './pokeSlice'


export const getPokemons = ( page = 0 ) => {
  
  return async (dispatch, geState) => {

    dispatch( startLoadingPokemons() );

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    const data = await resp.json();

    console.log(data);

    dispatch (setPokemons({
      pokemons: data.results,
      page: page + 1
    }));

  }
}
