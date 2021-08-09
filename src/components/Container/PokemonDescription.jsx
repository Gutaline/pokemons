import React from 'react'
import heart from '../../assets/Heart1.png'

function PokemonDescription({ pokiDescription }) {
//     //
// const [favor, setFavor] = React.useState(false)
//   const handleFormSubmit = () => {
// localStorage.setItem(favor)
//   }
//
  return (
    <div className="view-description">
      <div className="view-description__name">{pokiDescription.name}</div>
      <div className="view-description__image">
        <img
          src={pokiDescription.sprites.other.dream_world.front_default}
          alt=""
        />
      </div>
      <div className="view-description__type">
        Class:{pokiDescription.types[0].type.name}
      </div>
      <div
        className="view-description__heart"
        onClick={() => (pokiDescription.favor = !pokiDescription.favor)}
      >
        <div>
          <img className="view-description__heart" src={heart} alt="heart" />
        </div>
      </div>
    </div>
  )
}

export default PokemonDescription
