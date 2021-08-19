import React, { useState } from 'react'
import Header from './Header'
import Categories from './Categories'
import SelectItems from './SelectItems'
import View from './View'
import useLocalStorage from './useLocalStorage'


import { IPoki } from '../../interface'

export const Container: React.FC<{
  pokemonsList: IPoki[]
}> = ({ pokemonsList }) => {
  const [myState, setMyState] = useState<any>()
  const [filter, setFilter] = useState('All')

  const [mobile, setMobile] = useState(false)

  const [favoritesVisible, setFavoritesVisible] = useState(false)

  const [favorites, setFavorites] = useLocalStorage('poki', [])

  const [showHeartDescr, setShowHeartDescr] = useState(true)
  const [burger, setBurger] = useState(false)

  return (
    <div className="container">
      <Header burger={burger} setBurger={setBurger} />
      <div className="wrapper">
        <Categories
          setFilter={setFilter}
          setFavoritesVisible={setFavoritesVisible}
          burger={burger}
          setBurger={setBurger}
          setMobile={setMobile}
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
            'torrent',
          ]}
        />
        <SelectItems
          pokemonsList={pokemonsList}
          deepState={setMyState}
          filter={filter}
          favorites={favorites}
          favoritesVisible={favoritesVisible}
          setShowHeartDescr={setShowHeartDescr}
          setMobile={setMobile}
          mobile={mobile}
          />
        <View
          myState={myState}
          pokiDescription={pokemonsList[myState - 1]}
          favorites={setFavorites}
          showHeartDescr={showHeartDescr}
          setShowHeartDescr={setShowHeartDescr}
          mobile={mobile}
          setMobile={setMobile}
        />
      </div>
    </div>
  )
}

export default Container
