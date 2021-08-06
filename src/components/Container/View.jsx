import React from 'react'
import PokemonDescription from './PokemonDescription'

function View({myState,pokiDescription}) {
  return (
    <div  className = "view" onClick = {()=> console.log(myState)}>
     { myState &&
        <PokemonDescription  pokiDescription = {pokiDescription} />
     } 
    </div>
  )
}

export default View
