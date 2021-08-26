import {action, makeAutoObservable, observable} from 'mobx'
import pokemonsID from './pokemonsID'
import allPoki from '../store/allPoki'
import { IPokiFavor} from '../interface'

class loadDescription {
  loading: number = 0
  description: any = allPoki.pokemons[0]
  favorOrNot: boolean = false

  constructor() {
    makeAutoObservable(this, {
      description: observable,
      loading: observable,
      checkLocal: action
    })
  }

  checkLocal() {
    if (pokemonsID.pokifavor) {
      const description = JSON.parse(localStorage.getItem('poki')!).filter(
        (poki: IPokiFavor) => poki.id === pokemonsID.idPoki
      )
      let a = description
      this.description = description
      console.log(a)
      this.loading = 1
    } else {
      this.description = allPoki.pokemons[pokemonsID.idPoki - 1]
      this.loading = 2
    }
  }
}

export default new loadDescription()
