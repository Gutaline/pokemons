import React from 'react'
import PokemonDescription from './PokemonDescription'


import {IPoki} from "../../interface";

export const View: React.FC<{
  myState:any
  pokiDescription:IPoki
  favorites: ()=> void
  showHeartDescr:boolean
  setShowHeartDescr: (param:boolean) => void

}> =({myState,pokiDescription,favorites,showHeartDescr,setShowHeartDescr}) => {


  return (

    <div  className = "view" >
     { myState &&
        <PokemonDescription
        favorites = {favorites}
        allDescr = {pokiDescription}
        ability = {pokiDescription.abilities[0].ability.name}
        abilityDescr = {pokiDescription.abildesr[1].effect}
        id = {pokiDescription.id}
        name = {pokiDescription.name}
        image = {pokiDescription.sprites.other.dream_world.front_default}
        type = {pokiDescription.types[0].type.name}
        showHeartDescr = {showHeartDescr}
        setShowHeartDescr = {setShowHeartDescr}
        />
      }
    </div>
  )
}

export default View
