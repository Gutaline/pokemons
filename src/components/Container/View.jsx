import React from 'react'
import PokemonDescription from './PokemonDescription'

function View({myState,pokiDescription,favorites}) {
  return (
    <div  className = "view" >
     { myState &&
        <PokemonDescription  
        favorites = {favorites}  

        id = {pokiDescription.id}
        name = {pokiDescription.name}
        image = {pokiDescription.sprites.other.dream_world.front_default}
        type = {pokiDescription.types[0].type.name}
        heartVisible = {pokiDescription.favor}
        test = {pokiDescription.favor}
        />
     } 
    </div>
  )
}

export default View
