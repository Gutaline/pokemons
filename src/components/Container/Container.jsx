import React, {useState} from 'react'
import Header from './Header'
import Categories from './Categories'
import SelectItems from './SelectItems'
import View from './View'

const Container = ({ pokemonsList }) => {
  let arrayForSelectItems = pokemonsList

  const [myState, setMyState] = useState()
  const [filter, setFilter] = useState('All')

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Categories className="categories" setFilter={setFilter} />
        <SelectItems
          pokemonsList={arrayForSelectItems}
          deepState={setMyState}
          filter={filter}
        />
        <View
          myState={myState}
          pokiDescription={arrayForSelectItems[myState - 1]}
        />
      </div>
    </div>
  )
}

export default Container
