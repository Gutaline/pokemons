import {action, makeAutoObservable, observable} from 'mobx'
import pokemonsID from './pokemonsID'
import allPoki from '../store/allPoki'
import {IPokiFavor} from '../interface'


class loadDescription {
  loading:number = 0;
  mobileState:any = null;
  favorOrNot:boolean = false

  constructor() {
    makeAutoObservable(this, {
      mobileState: observable,
      loading: observable,
      checkLocal: action
    })
  }

  checkLocal() {

    if(pokemonsID.pokifavor) {
      const description = JSON.parse(localStorage.getItem('poki')!).filter((poki:IPokiFavor) => poki.id === pokemonsID.idPoki)
      let a = description
      this.mobileState  = description
      console.log(a)
      this.loading = 1
    }
    else {
      this.mobileState = allPoki.pokemons[pokemonsID.idPoki - 1]
      this.loading = 2
    }

  }

}

export default new loadDescription()
