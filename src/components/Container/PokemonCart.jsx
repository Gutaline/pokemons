import React from 'react'
import heart from '../../assets/Heart1.png'

function PokemonCart({id,name,type,image,deepState,favor}) {

  
    return (
        <button className="pokemon-cart" onClick = {() => {
            deepState(id)
        }}>
           <div  ><span>№{id}</span></div>
            <div ><img src={image} alt="pokemon" /></div>
            <div>
                <strong className = "pokemon-cart__name"> {name}</strong>
                
            </div>
            
                 <div>Class: {type}</div>
                 {favor && <div className = "pokemon-cart__heart "  ><img src={heart} alt="like" / ></div>}
            
                
        </button>
            
    );
}

export default PokemonCart
