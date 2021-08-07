import React from 'react'
import heart from '../../assets/Heart1.png'

const Categories = ({ setFilter }) => {
  const [visibleAbilites, setVisibleAbilites] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались
  const [visibleClass, setVisibleClass] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались

  return (
    <div className="categories">
      <img className="categories-img" src={heart} alt="heart" />
      <div className="title">Категории</div>
      <ul className="categoriesList">
        <li onClick={() => setVisibleAbilites(!visibleAbilites)}>
          Классы
          {visibleAbilites && (
            <ul>
              <li
                onClick={() => {
                  setFilter('grass')
                }}
              >
                Grass
              </li>
              <li
                onClick={() => {
                  setFilter('normal')
                }}
              >
                Normal
              </li>
              <li
                onClick={() => {
                  setFilter('fire')
                }}
              >
                Fire
              </li>
              <li
                onClick={() => {
                  setFilter('water')
                }}
              >
                Water
              </li>
              <li
                onClick={() => {
                  setFilter('bug')
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
