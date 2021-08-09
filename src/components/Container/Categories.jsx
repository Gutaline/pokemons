import React from 'react'
import heart from '../../assets/Heart1.png'

const Categories = ({ setFilter ,setFavoritesVisible }) => {
  const [visibleAbilites, setVisibleAbilites] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались
  const [visibleClass, setVisibleClass] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались

  return (
    <div className="categories">

      <div className = "categories-favorites__wrapper" onClick = { () => {setFavoritesVisible(currentValue => currentValue  = true)}}>
          <img className="categories-img" src={heart} alt="heart"  />
          <div className="categories-favorites">Избранное</div>
      </div>

      <div className="title">Категории</div>
      <ul className="categoriesList">
        <li onClick={() => setVisibleAbilites(!visibleAbilites)}>
          Классы
          {visibleAbilites && (
            <ul>
              <li
                onClick={() => {
                  setFilter('grass')
                  setFavoritesVisible(currentValue => currentValue  = false)
                  
                }}
              >
                Grass
              </li>
              <li
                onClick={() => {
                  setFilter('normal')
                  setFavoritesVisible(currentValue => currentValue  = false)
                }}
              >
                Normal
              </li>
              <li
                onClick={() => {
                  setFilter('fire')
                  setFavoritesVisible(currentValue => currentValue  = false)
                }}
              >
                Fire
              </li>
              <li
                onClick={() => {
                  setFilter('water')
                  setFavoritesVisible(currentValue => currentValue  = false)
                }}
              >
                Water
              </li>
              <li
                onClick={() => {
                  setFilter('bug')
                  setFavoritesVisible(currentValue => currentValue  = false)
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
              <li>Overgroth</li>
              <li>Fire</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Categories
