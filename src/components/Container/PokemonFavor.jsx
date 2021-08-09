import React from 'react'

function PokemonFavor({id,image,name,type}) {
    return (
        <button className="pokemon-cart" onClick = {() => {
            
        }}> 
           <div  ><span>№{id}</span></div>
            <div ><img src={image} alt="pokemon" /></div>
            <div>
                <strong className = "pokemon-cart__name"> {name}</strong>
                <div>Class: {type}</div>
            </div>
        </button>
    )
}

export default PokemonFavor
