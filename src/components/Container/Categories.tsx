import React from 'react'
import heart from '../../assets/Heart1.png'

import {observer} from 'mobx-react-lite'
import burger from '../../store/burger'
import mobile from '../../store/mobile'
import favorItems from '../../store/favorItems'
import pokemonsFilter from '../../store/pokemonsFilter'
import visible from '../../store/visible'
import searchItems from '../../store/searchItems'

export const Categories: React.FC<{}> = observer(() => {

  return (
    <div className={burger.burgerState ? 'categories active' : 'categories'}>
      <div
        className="categories-favorites__wrapper"
        onClick={() => {
          favorItems.favorActive()
          //setFavoritesVisible(true)
          pokemonsFilter.setFilter('')
        }}>
        <img className="categories-img" src={heart} alt="heart" />
        <div
          className="categories-favorites"
          onClick={() => {
            burger.setBurgerFalse()
            mobile.disableMobile()
          }}>
          Избранное
        </div>
      </div>
      <div className="title">Категории</div>
      <ul className="categoriesList">
        <li
          onClick={() => {
            pokemonsFilter.setFilter('All')
            favorItems.favorDisable()
            //setFavoritesVisible(false)
            burger.setBurgerFalse()
            mobile.disableMobile()
          }}>
          Все покемоны
        </li>
        <li onClick={() => visible.setVisibleAbilites()}>
          Классы
          {visible.Abilites && (
            <ul>
              {searchItems.itemClass.map((ability, index) => (
                <li
                  key={`${ability}_${index}`}
                  onClick={() => {
                    pokemonsFilter.setFilter(`${ability}`)
                    favorItems.favorDisable()
                    //setFavoritesVisible(false)
                    burger.setBurgerFalse()
                    mobile.disableMobile()
                  }}>
                  {ability}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li onClick={() => visible.setVisibleClass()}>
          Cпособности
          {visible.Class && (
            <ul>
              {searchItems.itemAbility.map((ability, index) => (
                <li
                  key={`${ability}_${index}`}
                  onClick={() => {
                    pokemonsFilter.setFilter(`${ability}`)
                    favorItems.favorDisable()
                    //setFavoritesVisible(false)
                    burger.setBurgerFalse()

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
})
export default Categories
