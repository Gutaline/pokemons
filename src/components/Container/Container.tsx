import React, {useState} from 'react'
import Header from './Header'
import Categories from './Categories'
import SelectItems from './SelectItems'
import View from './View'
import useLocalStorage from './useLocalStorage'
import {IPoki} from '../../interface'

import {observer} from 'mobx-react-lite'
import pokemonsId from '../../store/pokemonsID'
import allPoki from '../../store/allPoki'

export const Container: React.FC<{
  pokemonsList: IPoki[]
}> = observer(({pokemonsList}) => {
  const [filter, setFilter] = useState('All')

  const [favorites, setFavorites] = useLocalStorage('poki', [])

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Categories
          setFilter={setFilter}
          itemClass={['grass', 'normal', 'fire', 'water', 'bug']}
          itemAbility={[
            'overgroth',
            'blaze',
            'shield-dust',
            'shed-skin',
            'compound-eyes',
            'swarm',
            'keen-eye',
            'run-away',
            'torrent'
          ]}
        />
        <SelectItems
          pokemonsList={pokemonsList}
          filter={filter}
          favorites={favorites}
        />
        <View
          pokiDescription={allPoki.count[pokemonsId.idPoki - 1]}
          favorites={setFavorites}
        />
      </div>
    </div>
  )
})

export default Container
