import React from 'react'
import PokemonCart from './PokemonCart'

import {IPoki} from "../../interface";

export const SelectItems:React.FC<{
  pokemonsList:IPoki[]
  deepState: (param: number) => void
  filter:string
  favorites: any[]
  favoritesVisible: boolean
  setShowHeartDescr: (param:boolean) => void
}>  = ({ pokemonsList, deepState, filter,favorites,favoritesVisible,setShowHeartDescr}) => {
  const [q, setQ] = React.useState('') // это для поискового запроса
  const [searchParam] = React.useState(['name']) // задача массива нужных нам данных в АПИ

  function search(pokemonsList:IPoki[]) {
    // eslint-disable-next-line
    return pokemonsList.filter((pokemonsList:any) => {
      if (
        pokemonsList.types[0].type.name === filter ||
        pokemonsList.abilities[0].ability.name === filter
      ) {
        return searchParam.some((newItem) => {
          return (
            pokemonsList[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          )
        })
      } else if (filter === 'All') {
        return searchParam.some((newItem) => {
          return (
            pokemonsList[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          )
        })
      }})}

      function renderFavorOrItems() {

        if(favoritesVisible) {
            if(favorites.length > 0) {
            return favorites.map((pokemon:any,index:number) => (
              <PokemonCart
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type}
              key={index}
              deepState={deepState}
              favor={pokemon.favor}
              setShowHeartDescr  = {setShowHeartDescr}
            />
            ))
            } else { return <div> У вас тут пусто :(</div>}
        } else {
          return search(pokemonsList).map((pokemon:IPoki,index:number) => (
            <PokemonCart
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              deepState={deepState}
              favor={pokemon.favor}
              setShowHeartDescr  = {setShowHeartDescr }
            />
          ))
        }
      }
  


  return (
    <div className="selectItems">
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </label>
      </div>

      {renderFavorOrItems()}
    </div>
  )
}

export default SelectItems
