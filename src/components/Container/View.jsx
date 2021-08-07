import React from 'react'
import PokemonDescription from './PokemonDescription'

function View({myState,pokiDescription,setFavorites}) {
  return (
    <div  className = "view" >
     { myState &&
        <PokemonDescription  pokiDescription = {pokiDescription} setFavorites = {setFavorites} />
     } 
    </div>
  )
}

export default View
