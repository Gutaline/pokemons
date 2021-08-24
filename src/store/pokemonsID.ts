import {action, makeAutoObservable, observable} from 'mobx'

class pokemonsID {
  idPoki = 0
  pokifavor = false

  constructor() {
    makeAutoObservable(this, {
      idPoki: observable,
      setIdPoki: action
    })
  }

  setIdPoki(value:number,param:boolean) {
    this.idPoki = value
    this.pokifavor = param;
  }
  

}

export default new pokemonsID()
