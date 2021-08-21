import React from 'react'
import heart from '../../assets/Heart1.png'

export const Categories: React.FC<{
  setMobile: (par: boolean) => void
  setBurger: (par: boolean) => void
  setFilter: (param: string) => void
  setFavoritesVisible: (p: boolean) => void
  burger: boolean
  itemClass: string[]
  itemAbility: string[]
}> = ({
  setMobile,
  setBurger,
  setFilter,
  setFavoritesVisible,
  burger,
  itemClass,
  itemAbility
}) => {
  const [visibleAbilites, setVisibleAbilites] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались
  const [visibleClass, setVisibleClass] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались

  return (
    <div className={burger ? 'categories active' : 'categories'}>
      <div
        className="categories-favorites__wrapper"
        onClick={() => {
          setFavoritesVisible(true)
          setFilter('')
        }}>
        <img className="categories-img" src={heart} alt="heart" />
        <div
          className="categories-favorites"
          onClick={() => {
            setBurger(false)
            setMobile(false)
          }}>
          Избранное
        </div>
      </div>

      <div className="title">Категории</div>

      <ul className="categoriesList">
        <li
          onClick={() => {
            setFilter('All')
            setFavoritesVisible(false)
            setBurger(false)
            setMobile(false)
          }}>
          Все покемоны
        </li>
        <li onClick={() => setVisibleAbilites(!visibleAbilites)}>
          Классы
          {visibleAbilites && (
            <ul>
              {itemClass.map((ability, index) => (
                <li
                  key={`${ability}_${index}`}
                  onClick={() => {
                    setFilter(`${ability}`)
                    setFavoritesVisible(false)
                    setBurger(false)
                    setMobile(false)
                  }}>
                  {ability}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li onClick={() => setVisibleClass(!visibleClass)}>
          Cпособности
          {visibleClass && (
            <ul>
              {itemAbility.map((ability, index) => (
                <li
                  key={`${ability}_${index}`}
                  onClick={() => {
                    setFilter(`${ability}`)
                    setFavoritesVisible(false)
                    setBurger(false)
                    setMobile(false)
                  }}>
                  {ability}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}

export default Categories
