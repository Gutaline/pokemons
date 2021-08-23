import {action, makeAutoObservable, observable} from 'mobx'

class pokemonsID {
  idPoki = 0

  constructor() {
    makeAutoObservable(this, {
      idPoki: observable,
      setIdPoki: action
    })
  }

  setIdPoki(value: number) {
    this.idPoki = value
  }
}

export default new pokemonsID()
