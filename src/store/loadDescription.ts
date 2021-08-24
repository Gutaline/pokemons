import {action, makeAutoObservable, observable} from 'mobx'
import pokemonsID from './pokemonsID'
import allPoki from '../store/allPoki'

class loadDescription {
  loading:number = 0;
  mobileState:any = allPoki.count[1];
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
      const description = JSON.parse(localStorage.getItem('poki')!).filter((poki:any) => poki.id === pokemonsID.idPoki)
      let a = description
      this.mobileState  = description
      console.log(a)
      this.loading = 1
    }
    else {
      this.mobileState = allPoki.count[pokemonsID.idPoki - 1]
      this.loading = 2
    }

  }

}

export default new loadDescription()

//