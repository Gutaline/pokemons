import React from 'react'
import heart from '../../assets/Heart1.png'

function PokemonDescription({
  id,
  name,
  image,
  type,
  favorites,
  heartVisible,
}) {
  return (
    <div className="view-description">
      <div className="view-description__name">{name}</div>
      <div className="view-description__image">
        <img src={image} alt="" />
      </div>
      <div className="view-description__type">Class:{type}</div>
      <div className="view-description__heart">
        <div
          onClick={() => {
            favorites((currentList) => [
              ...currentList,
              { id: id, name: name, image: image, type: type },
            ])
          }}
        >
          {heartVisible ? (
            <div> </div>
          ) : (
            <img className="view-description__heart " src={heart} alt="heart" />
          )}
        </div>
      </div>
    </div>
  )
}

export default PokemonDescription
