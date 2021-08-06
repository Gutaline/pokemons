import React from "react";
import PokemonCart from "./PokemonCart";


const SelectItems = ({pokemonsList,deepState}) => {

 
  return (
    <div className="selectItems">
     
      {
        pokemonsList.map((pokemon,index) => <PokemonCart 
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        type={pokemon.types[0].type.name}
        key={index}
        deepState = {deepState}
        
       />)
          
      }
    </div>
  );
};



export default SelectItems;