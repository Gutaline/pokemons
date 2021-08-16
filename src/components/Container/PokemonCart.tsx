import React from 'react'
import heart from '../../assets/Heart1.png'

export const PokemonCart: React.FC<{
    id: number
    name: string
    type: string
    image: string
    deepState:(param: number) => void
    favor: boolean
    setShowHeartDescr: (param: boolean) => void 

}> = ({id,name,type,image,deepState,favor,setShowHeartDescr}) => (

  
        <button className="pokemon-cart" onClick = {() => {
            
            deepState(id);
            if(favor) {
                setShowHeartDescr(false);
            } else {
                setShowHeartDescr(true);
            }
          
        }}>
           <div  ><span>№{id}</span></div>
            <div ><img src={image} alt="pokemon" /></div>
            <div>
                <strong className = "pokemon-cart__name"> {name}</strong>
                
            </div>
            
                 <div>Class: {type}</div>
                 {favor && <div className = "pokemon-cart__heart "  ><img src={heart} alt="like" / ></div>}
              
        </button>
            
    
)

export default PokemonCart
