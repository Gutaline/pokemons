import React from 'react'
import PokemonCart from './PokemonCart'
import allPoki from '../../store/allPoki'

import {IPoki, IPokiFavor} from '../../interface'

import loader from '../../assets/loader.svg'
import mobile from '../../store/mobile'
import favorItems from '../../store/favorItems'
import {observer} from 'mobx-react-lite'
import pokemonsFilter from '../../store/pokemonsFilter'

export const SelectItems: React.FC<{
  pokemonsList: IPoki[]
  favorites: IPokiFavor[]
}> = observer(({pokemonsList, favorites}) => {
  const [q, setQ] = React.useState('') // это для поискового запроса
  const [searchParam] = React.useState(['name']) // задача массива нужных нам данных в АПИ

  const pageEnd = React.useRef<any>()

  React.useEffect(() => {
    if (pokemonsFilter.filter === 'All') {
      const observer = new IntersectionObserver(
        (entries) => {
          if (pokemonsFilter.filter === 'All' && entries[0].isIntersecting) {
            allPoki.getPoki()
          }
        },
        {threshold: 1}
      )

      observer.observe(pageEnd.current)
    } // eslint-disable-next-line
  }, [pokemonsFilter.filter])

  function search(pokemonsList: IPoki[]) {
    // eslint-disable-next-line
    return pokemonsList.filter((pokemonsList: any) => {
      if (
        pokemonsList.types[0].type.name === pokemonsFilter.filter ||
        pokemonsList.abilities[0].ability.name === pokemonsFilter.filter
      ) {
        return searchParam.some((newItem) => {
          return (
            pokemonsList[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          )
        })
      } else if (pokemonsFilter.filter === 'All') {
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
    if (favorItems.favorState) {
      if (favorites.length > 0) {
        return favorites.map((pokemon: IPokiFavor, index: number) => (
          <PokemonCart
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
            key={index}
            favor={pokemon.favor}
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
              favor={pokemon.favor}
            />
          ))}
        </>
      )
    }
  }

  return (
    <div className={mobile.mobileState ? 'selectItems mobile' : 'selectItems'}>
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
      {pokemonsFilter.filter === 'All' && (
        <div className="download" ref={pageEnd}>
          <span>Загрузка...</span>
        </div>
      )}
    </div>
  )
})

export default SelectItems
