import React from 'react'
import heart from '../../assets/Heart1.png'
import pokemonsId from '../../store/pokemonsID'
import mobile from '../../store/mobile'
import showHeart from '../../store/showHeart'
import {observer} from 'mobx-react-lite'
export const PokemonCart: React.FC<{
  id: number
  name: string
  type: string
  image: string

  favor: boolean
}> = observer(({id, name, type, image, favor}) => (
  <button
    className="pokemon-cart"
    onClick={() => {
      // deepState(id);
      pokemonsId.setIdPoki(id)
      mobile.activeMobile()
      if (favor) {
        showHeart.heartDisable()
        //setShowHeartDescr(false)
      } else {
        showHeart.heartActive()
        //setShowHeartDescr(true)
      }
    }}>
    <div>
      <span>№{id}</span>
    </div>
    <div>
      <img src={image} alt="pokemon" />
    </div>
    <div>
      <strong className="pokemon-cart__name"> {name}</strong>
    </div>

    <div>Class: {type}</div>
    {favor && (
      <div className="pokemon-cart__heart ">
        <img src={heart} alt="like" />
      </div>
    )}
  </button>
))

export default PokemonCart
