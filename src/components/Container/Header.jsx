import React from 'react'
import logo from '../../assets/logo.png'
import ball from '../../assets/ball-1.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo_ball">
        <img src={ball} alt="ball" />
      </div>
      <div className="header-logo__pokeman">
        <img src={logo} alt="pokemon" />
      </div>
    </div>
  )
}

export default Header
