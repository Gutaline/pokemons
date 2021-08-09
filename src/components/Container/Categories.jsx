import React from 'react'
import heart from '../../assets/Heart1.png'

const Categories = ({ setFilter, setFavoritesVisible }) => {
  const [visibleAbilites, setVisibleAbilites] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались
  const [visibleClass, setVisibleClass] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались

  return (
    <div className="categories">
      <div
        className="categories-favorites__wrapper"
        onClick={() => {
          setFavoritesVisible((currentValue) => (currentValue = true))
        }}
      >
        <img className="categories-img" src={heart} alt="heart" />
        <div className="categories-favorites">Избранное</div>
      </div>

      <div className="title">Категории</div>

      <ul className="categoriesList">
        <li onClick={() => setFilter('All')}>Все покемоны</li>
        <li onClick={() => setVisibleAbilites(!visibleAbilites)}>
          Классы
          {visibleAbilites && (
            <ul>
              <li
                onClick={() => {
                  setFilter('grass')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Grass
              </li>
              <li
                onClick={() => {
                  setFilter('normal')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Normal
              </li>
              <li
                onClick={() => {
                  setFilter('fire')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Fire
              </li>
              <li
                onClick={() => {
                  setFilter('water')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Water
              </li>
              <li
                onClick={() => {
                  setFilter('bug')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Bug
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => setVisibleClass(!visibleClass)}>
          Cпособности
          {visibleClass && (
            <ul>
              <li
                onClick={() => {
                  setFilter('overgrow')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Overgroth
              </li>
              <li
                onClick={() => {
                  setFilter('blaze')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Blaze
              </li>
              <li
                onClick={() => {
                  setFilter('shield-dust')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Shield-dust
              </li>
              <li
                onClick={() => {
                  setFilter('shed-skin')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Shed-skin
              </li>
              <li
                onClick={() => {
                  setFilter('compound-eyes')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Compound-eyes
              </li>
              <li
                onClick={() => {
                  setFilter('swarm')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Swarm
              </li>
              <li
                onClick={() => {
                  setFilter('keen-eye')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Keen-eye
              </li>
              <li
                onClick={() => {
                  setFilter('run-away')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Run-away
              </li>
              <li
                onClick={() => {
                  setFilter('torrent')
                  setFavoritesVisible((currentValue) => (currentValue = false))
                }}
              >
                Torrent
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Categories
