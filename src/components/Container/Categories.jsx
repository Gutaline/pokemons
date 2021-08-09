import React, {useState} from 'react'
import heart from '../../assets/Heart1.png'

const Categories = ({ setFilter }) => {
  const [visibleAbilites, setVisibleAbilites] = useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались
  const [visibleClass, setVisibleClass] = useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались

  return (
    <div className="categories">

      <div className = "categories-favorites__wrapper" onClick = { () => setFilter('favorite')}>
          <img className="categories-img" src={heart} alt="heart"  />
          <div className="categories-favorites">Избранное</div>
      </div>

      <div className="title" onClick={()=> {
        setFilter('All')
      }}>Категории</div>
      <ul className="categoriesList">
        <li onClick={() => setVisibleAbilites(!visibleAbilites)}>
          Классы
          {visibleAbilites && (
            <ul>
              <li
                onClick={() => {
                  setFilter('All')
                }}
              >
                All
              </li>
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
