import React, {useState} from 'react'
import Header from './Header'
import Categories from './Categories'
import SelectItems from './SelectItems'
import View from './View'
import useLocalStorage from "./useLocalStorage"

const Container = ({ pokemonsList }) => {


  const [myState, setMyState] = useState()
  const [filter, setFilter] = useState('All')

  const [favoritesVisible,setFavoritesVisible] = React.useState(false);

  const [favorites, setFavorites] = useLocalStorage("poki",[]);

  const [showHeartDescr,setShowHeartDescr] = React.useState(true);



  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Categories className="categories"
          setFilter={setFilter}
          setFavoritesVisible = {setFavoritesVisible}
        />
        <SelectItems
          pokemonsList={pokemonsList}
          deepState={setMyState}
          filter={filter}
          favorites = {favorites}
          favoritesVisible = {favoritesVisible}
          setShowHeartDescr = {setShowHeartDescr}
        />
        <View
          myState={myState}
          pokiDescription={pokemonsList[myState - 1]}
          favorites = {setFavorites}
          showHeartDescr = {showHeartDescr}
          setShowHeartDescr = {setShowHeartDescr}
        />
      </div>
    </div>
  )
}

export default Container
