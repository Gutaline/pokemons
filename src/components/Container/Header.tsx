import React from 'react'
import logo from '../../assets/logo.png'
import ball from '../../assets/ball-1.png'

export const Header: React.FC<{
  burger: boolean
  setBurger: (burger: boolean) => void
}> = ({ burger, setBurger }) => {
  return (
    <div className="header">
      <div className="header-logo_ball">
        <img src={ball} alt="ball" />
      </div>
      <div className="header-logo__pokeman">
        <img src={logo} alt="pokemon"onClick={() => window.location.reload()} />
      </div>

      <div
        className="burger-menu"
        onClick={() => {
          setBurger(!burger)
        }}
      >
        <span></span>
      </div>
    </div>
  )
}

export default Header
