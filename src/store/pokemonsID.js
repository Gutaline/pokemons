import {action, makeAutoObservable, observable} from 'mobx'

class pokemonsID {
  idPoki = 0

  constructor() {
    makeAutoObservable(this, {
      idPoki: observable,
      getIdPoki: action,
      setIdPoki: action
    })
  }

  setIdPoki(value) {
    this.idPoki = value
  }
}

export default new pokemonsID()
