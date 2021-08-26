import React from 'react'
import Container from '../Container/Container'
import {IPokiFavor} from '../../interface'
import allPoki from '../../store/allPoki'
import {observer} from 'mobx-react-lite'

export const App: React.FC = observer(() => {
  function checkFavorPoki() {
    const a = JSON.parse(localStorage.getItem('poki')!)
    let favorPoki: number[] = []

    if (a) {
      a.forEach((item: IPokiFavor, index: number) => {
        favorPoki[index] = item.id
      })

      allPoki.pokemons.forEach((item, index) => {
        if (favorPoki.includes(item.id)) {
          allPoki.trueFavor(index + 1)
        }
      })
    }
  }

  checkFavorPoki()

  return (
    <div className="App">
      <Container />
    </div>
  )
})

export default App
