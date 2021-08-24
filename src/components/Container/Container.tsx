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
  const [favorites, setFavorites] = useLocalStorage('poki', [])

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Categories
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
        <SelectItems pokemonsList={pokemonsList} />
        <View pokiDescription={allPoki.count[pokemonsId.idPoki - 1]} />
      </div>
    </div>
  )
})

export default Container
