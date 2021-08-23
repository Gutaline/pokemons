import React from 'react'
import heart from '../../assets/Heart1.png'

import {observer} from 'mobx-react-lite'
import burger from '../../store/burger'
import mobile from '../../store/mobile'
import favorItems from '../../store/favorItems'

export const Categories: React.FC<{
  setFilter: (param: string) => void

  itemClass: string[]
  itemAbility: string[]
}> = observer(
  ({
    setFilter,

    itemClass,
    itemAbility
  }) => {
    const [visibleAbilites, setVisibleAbilites] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались
    const [visibleClass, setVisibleClass] = React.useState(false) // Эти стейты нужны ,Чтобы кнопки выдвигались

    return (
      <div className={burger.burgerState ? 'categories active' : 'categories'}>
        <div
          className="categories-favorites__wrapper"
          onClick={() => {
            favorItems.favorActive()
            //setFavoritesVisible(true)
            setFilter('')
          }}>
          <img className="categories-img" src={heart} alt="heart" />
          <div
            className="categories-favorites"
            onClick={() => {
              burger.burgerState = false
              mobile.disableMobile()
            }}>
            Избранное
          </div>
        </div>

        <div className="title">Категории</div>

        <ul className="categoriesList">
          <li
            onClick={() => {
              setFilter('All')
              favorItems.favorDisable()
              //setFavoritesVisible(false)
              burger.burgerState = false
              mobile.disableMobile()
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
                      favorItems.favorDisable()
                      //setFavoritesVisible(false)
                      burger.burgerState = false
                      mobile.disableMobile()
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
                      favorItems.favorDisable()
                      //setFavoritesVisible(false)
                      burger.burgerState = false
                      mobile.disableMobile()
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
)
export default Categories
