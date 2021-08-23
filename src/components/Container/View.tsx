import React from 'react'
import PokemonDescription from './PokemonDescription'
import pokemonsId from '../../store/pokemonsID'
import {IPoki} from '../../interface'
import {observer} from 'mobx-react-lite'
export const View: React.FC<{
  pokiDescription: IPoki
  favorites: () => void
}> = observer(({pokiDescription, favorites}) => {
  function renderDescription() {}

  return (
    <div className="view">
      {pokemonsId.idPoki && (
        <PokemonDescription
          favorites={favorites}
          allDescr={pokiDescription}
          ability={pokiDescription.abilities[0].ability.name}
          abilityDescr={pokiDescription.abildesr[1].effect}
          id={pokiDescription.id}
          name={pokiDescription.name}
          image={pokiDescription.sprites.other.dream_world.front_default}
          type={pokiDescription.types[0].type.name}
        />
      )}
      {renderDescription()}
    </div>
  )
})

export default View
