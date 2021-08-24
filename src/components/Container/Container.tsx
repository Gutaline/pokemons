import React from 'react'
import Header from './Header'
import Categories from './Categories'
import SelectItems from './SelectItems'
import View from './View'
import useLocalStorage from './useLocalStorage'
import {IPoki} from '../../interface'

import load from '../../store/loadDescription'
import {observer} from 'mobx-react-lite'

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

        <SelectItems pokemonsList={pokemonsList} favorites={favorites} />
        <View pokiDescription={load.loading} favorites={setFavorites} />
      </div>
    </div>
  )
})

export default Container
