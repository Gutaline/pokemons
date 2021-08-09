import React from 'react'
import PokemonDescription from './PokemonDescription'

function View({myState,pokiDescription,favorites,showHeartDescr,setShowHeartDescr}) {

 
  return (
    <div  className = "view" >
     { myState &&
        <PokemonDescription  
        favorites = {favorites}  
        allDescr = {pokiDescription}
        id = {pokiDescription.id}
        name = {pokiDescription.name}
        image = {pokiDescription.sprites.other.dream_world.front_default}
        type = {pokiDescription.types[0].type.name}
        heartVisible = {pokiDescription.favor}
        showHeartDescr = {showHeartDescr}
        setShowHeartDescr = {setShowHeartDescr}
        />
     } 
    </div>
  )
}

export default View
