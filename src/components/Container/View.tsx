import React from 'react'
import PokemonDescription from './PokemonDescription'
import emptyDescr from '../../../src/assets/emptyDescr.png'

import loadDescription from '../../store/loadDescription'

import {observer} from 'mobx-react-lite'

export const View: React.FC<{
  pokiDescription: number
  favorites: () => void
}> = observer(({pokiDescription, favorites}) => {
  function renderDescription() {
    if (pokiDescription === 0) {
      return (
        <div className="view-emptyDescr">
          <img src={emptyDescr} alt="Пустое описание" />
          <div>Нажмите на покемона в списке</div>
        </div>
      )
    } else if (pokiDescription === 2) {
      return (
        <>
          <PokemonDescription
            favorites={favorites}
            allDescr={loadDescription.description}
            ability={loadDescription.description.abilities[0].ability.name}
            abilityDescr={loadDescription.description.abildesr[1].effect}
            id={loadDescription.description.id}
            name={loadDescription.description.name}
            image={
              loadDescription.description.sprites.other.dream_world
                .front_default
            }
            type={loadDescription.description.types[0].type.name}
          />
        </>
      )
    } else {
      return (
        <>
          <PokemonDescription
            favorites={favorites}
            allDescr={loadDescription.description[0]}
            ability={loadDescription.description[0].ability}
            abilityDescr={loadDescription.description[0].abilityDescr}
            id={loadDescription.description[0].id}
            name={loadDescription.description[0].name}
            image={loadDescription.description[0].image}
            type={loadDescription.description[0].type}
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
