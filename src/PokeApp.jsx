import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './slices/trunks'

export const PokeApp = () => {

  const { isLoading } = useSelector( state => state.isLoading );
  const { pokemons } = useSelector( state => state.pokemons );
  const { page } = useSelector( state => state.page );

  console.log(pokemons)
  console.log(isLoading)
  console.log(page)

  const nextList = () => {
    dispatch( getPokemons(page) )
  }

  const dispatch = useDispatch();

  useEffect(() =>{ 
    dispatch( getPokemons() );
  }, [])

  return (
    <>
      <h1>PokeApp</h1>
      <h3>{isLoading ? "Cargando..." : "Listo"}</h3>
      <p>Pagina Nº {page}</p>
      <ul>
        {
          pokemons.map(({name})=>(
            <li key={name}>{name}</li>
          ))
        }
      </ul>
      <button onClick={nextList}>Siguiente</button>
    </>
  )
}
