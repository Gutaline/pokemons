import React from 'react'
import PokemonDescription from './PokemonDescription'

import loadDescription from '../../store/loadDescription'

import {observer} from 'mobx-react-lite'

export const View: React.FC<{

  pokiDescription: number
  favorites: () => void
}> = observer(({pokiDescription, favorites}) => {
  function renderDescription() {
    if (pokiDescription === 0) {
      return <div>Нажмите на покемона</div>
    } else if (pokiDescription === 2) {
      return (
        <>
          <PokemonDescription
            favorites={favorites}
            allDescr={loadDescription.mobileState}
            ability={loadDescription.mobileState.abilities[0].ability.name}
            abilityDescr={loadDescription.mobileState.abildesr[1].effect}
            id={loadDescription.mobileState.id}
            name={loadDescription.mobileState.name}
            image={
              loadDescription.mobileState.sprites.other.dream_world
                .front_default
            }
            type={loadDescription.mobileState.types[0].type.name}
          />
        </>
      )
    } else {
      return (
        <>
          <PokemonDescription
            favorites={favorites}
            allDescr={loadDescription.mobileState[0]}
            ability={loadDescription.mobileState[0].ability}
            abilityDescr={loadDescription.mobileState[0].abilityDescr}
            id={loadDescription.mobileState[0].id}
            name={loadDescription.mobileState[0].name}
            image={loadDescription.mobileState[0].image}
            type={loadDescription.mobileState[0].type}
          />
        </>
      )
    }
  }

  return <div className="view">{renderDescription()}</div>
})

export default View

//pokemonsId.idPoki

// return (
//   pokemonsId.idPoki && (
/* <PokemonDescription
  favorites={favorites}
  allDescr={pokiDescription}
  ability={pokiDescription.abilities[0].ability.name}
  abilityDescr={pokiDescription.abildesr[1].effect}
  id={pokiDescription.id}
  name={pokiDescription.name}
  image={pokiDescription.sprites.other.dream_world.front_default}
  type={pokiDescription.types[0].type.name}
/> */
//   )
// )
