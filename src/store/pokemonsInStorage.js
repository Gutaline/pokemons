import {makeAutoObservable} from 'mobx'

class pokemonsInStorage {
  localArray = []
  constructor() {
    makeAutoObservable(this)
  }

  addToArray(value) {
    this.localArray = [...this.localArray, value]
  }

  removeArray(value) {
    this.localArray = [...this.localArray, value]
  }
}

export default new pokemonsInStorage()
