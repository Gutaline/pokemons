import React from 'react'
import heart from '../../assets/Heart1.png'

export const Categories:React.FC<{

  setFilter: (param:string) => void
  setFavoritesVisible: (p:boolean) => void
  burger: boolean
  
}> = ({ setFilter, setFavoritesVisible ,burger}) => {
  const [visibleAbilites, setVisibleAbilites] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались
  const [visibleClass, setVisibleClass] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались

  return (
    <div className={burger ? "categories active" : "categories"}>
      <div
        className="categories-favorites__wrapper"
        onClick={() => {
          setFavoritesVisible(true)
        }}
      >
        <img className="categories-img" src={heart} alt="heart" />
        <div className="categories-favorites">Избранное</div>
      </div>

      <div className="title">Категории</div>

      <ul className="categoriesList">
        <li onClick={() => {
          setFilter('All')
          setFavoritesVisible( false)
        }
          }>Все покемоны</li>
        <li onClick={() => setVisibleAbilites(!visibleAbilites)}>
          Классы
          {visibleAbilites && (
            <ul>
              <li
                onClick={() => {
                  setFilter('grass')
                  setFavoritesVisible( false)
                }}
              >
                Grass
              </li>
              <li
                onClick={() => {
                  setFilter('normal')
                  setFavoritesVisible(false)
                }}
              >
                Normal
              </li>
              <li
                onClick={() => {
                  setFilter('fire')
                  setFavoritesVisible(false)
                }}
              >
                Fire
              </li>
              <li
                onClick={() => {
                  setFilter('water')
                  setFavoritesVisible(false)
                }}
              >
                Water
              </li>
              <li
                onClick={() => {
                  setFilter('bug')
                  setFavoritesVisible( false)
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
                  setFavoritesVisible(false)
                }}
              >
                Overgroth
              </li>
              <li
                onClick={() => {
                  setFilter('blaze')
                  setFavoritesVisible( false)
                }}
              >
                Blaze
              </li>
              <li
                onClick={() => {
                  setFilter('shield-dust')
                  setFavoritesVisible(false)
                }}
              >
                Shield-dust
              </li>
              <li
                onClick={() => {
                  setFilter('shed-skin')
                  setFavoritesVisible( false)
                }}
              >
                Shed-skin
              </li>
              <li
                onClick={() => {
                  setFilter('compound-eyes')
                  setFavoritesVisible(false)
                }}
              >
                Compound-eyes
              </li>
              <li
                onClick={() => {
                  setFilter('swarm')
                  setFavoritesVisible(false)
                }}
              >
                Swarm
              </li>
              <li
                onClick={() => {
                  setFilter('keen-eye')
                  setFavoritesVisible(false)
                }}
              >
                Keen-eye
              </li>
              <li
                onClick={() => {
                  setFilter('run-away')
                  setFavoritesVisible(false)
                }}
              >
                Run-away
              </li>
              <li
                onClick={() => {
                  setFilter('torrent')
                  setFavoritesVisible( false)
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
