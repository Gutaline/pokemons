import React from 'react'


function PokemonCart({id,name,type,image,deepState}) {
    return (
        <button className="pokemon-cart" onClick = {() => {
            deepState(id)
        }}>
           <div  ><span>№{id}</span></div>
            <div ><img src={image} alt="pokemon" /></div>
            <div>
                <strong className = "pokemon-cart__name"> {name}</strong>
                <div>Class: {type}</div>
            </div>
        </button>
            
    );
}

export default PokemonCart
