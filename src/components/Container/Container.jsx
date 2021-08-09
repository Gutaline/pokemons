import React from 'react'
import Header from './Header'
import Categories from './Categories'
import SelectItems from './SelectItems'
import View from './View'
import useLocalStorage from "./useLocalStorage"

const Container = ({ pokemonsList }) => {


  const [myState, setMyState] = React.useState()
  const [filter, setFilter] = React.useState('All')

  const [favoritesVisible,setFavoritesVisible] = React.useState(false);

  const [favorites, setFavorites] = useLocalStorage("poki",[]);
  

  

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
        />
        <View
          myState={myState}
          pokiDescription={pokemonsList[myState - 1]}
          favorites = {setFavorites}
        />
      </div>
    </div>
  )
}

export default Container
