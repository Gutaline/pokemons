import React from 'react'
import Header from './Header'
import Categories from './Categories'
import SelectItems from './SelectItems'
import View from './View'
import useLocalStorage from './useLocalStorage'

import {observer} from 'mobx-react-lite'

export const Container: React.FC<{}> = observer(() => {
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

        <SelectItems favorites={favorites} />
        <View favorites={setFavorites} />
      </div>
    </div>
  )
})

export default Container
