import React from 'react'
import PokemonCart from './PokemonCart'
import allPoki from '../../store/allPoki'

import {IPoki, IPokiFavor} from '../../interface'

import loader from '../../assets/loader.svg'

export const SelectItems: React.FC<{
  pokemonsList: IPoki[]
  deepState: (param: number) => void
  filter: string
  favorites: IPokiFavor[]
  favoritesVisible: boolean
  setShowHeartDescr: (param: boolean) => void
  setMobile: (param: boolean) => void
  mobile: boolean
}> = ({
  pokemonsList,
  deepState,
  filter,
  favorites,
  favoritesVisible,
  setShowHeartDescr,
  setMobile,
  mobile
}) => {
  const [q, setQ] = React.useState('') // это для поискового запроса
  const [searchParam] = React.useState(['name']) // задача массива нужных нам данных в АПИ

  const pageEnd = React.useRef<any>()

  React.useEffect(() => {
    if (filter === 'All') {
      const observer = new IntersectionObserver(
        (entries) => {
          if (filter === 'All' && entries[0].isIntersecting) {
            allPoki.getPoki()
            console.log(entries)
          }
        },
        {threshold: 1}
      )

      observer.observe(pageEnd.current)
    }
  }, [filter])

  function search(pokemonsList: IPoki[]) {
    // eslint-disable-next-line
    return pokemonsList.filter((pokemonsList: any) => {
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
      }
    })
  }

  function renderFavorOrItems() {
    if (favoritesVisible) {
      if (favorites.length > 0) {
        return favorites.map((pokemon: IPokiFavor, index: number) => (
          <PokemonCart
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
            key={index}
            deepState={deepState}
            favor={pokemon.favor}
            setShowHeartDescr={setShowHeartDescr}
            setMobile={setMobile}
          />
        ))
      } else {
        return <div> У вас тут пусто </div>
      }
    } else {
      return (
        <>
          {search(pokemonsList).map((pokemon: IPoki, index: number) => (
            <PokemonCart
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              deepState={deepState}
              favor={pokemon.favor}
              setShowHeartDescr={setShowHeartDescr}
              setMobile={setMobile}
            />
          ))}
        </>
      )
    }
  }

  return (
    <div className={mobile ? 'selectItems mobile' : 'selectItems'}>
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

      {allPoki.count.length >= 19 ? (
        renderFavorOrItems()
      ) : (
        <div>
          <img src={loader} alt="loading" />
        </div>
      )}
      {filter === 'All' && (
        <div className="test" ref={pageEnd}>
          <span>Загрузка...</span>
        </div>
      )}
    </div>
  )
}

export default SelectItems
