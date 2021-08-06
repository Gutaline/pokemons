import React from 'react'

function PokemonDescription({pokiDescription}) {
    
    return (
        <div className = "view-description">
          <div className = "view-description__name">{pokiDescription.name}</div> 
          <div className = "view-description__image"><img src={pokiDescription.sprites.other.dream_world.front_default} alt="" /></div>
          <div className = "view-description__type">Class:{pokiDescription.types[0].type.name}</div>
        
        </div>
    )
}

export default PokemonDescription
