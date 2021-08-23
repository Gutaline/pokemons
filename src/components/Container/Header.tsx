import React from 'react'
import logo from '../../assets/logo.png'
import ball from '../../assets/ball-1.png'

import {observer} from 'mobx-react-lite'
import burger from '../../store/burger'

export const Header: React.FC<{}> = observer(() => {
  return (
    <div className="header">
      <div className="header-logo_ball">
        <img src={ball} alt="ball" />
      </div>
      <div className="header-logo__pokeman">
        <img src={logo} alt="pokemon" />
      </div>

      <div
        className="burger-menu"
        onClick={() => {
          burger.setReverseState()
        }}>
        <span></span>
      </div>
    </div>
  )
})

export default Header
