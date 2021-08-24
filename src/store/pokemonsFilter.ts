import {action, makeAutoObservable, observable} from 'mobx'

class pokemonsFilter {
  filter = 'All'

  constructor() {
    makeAutoObservable(this, {
      filter: observable,
      setFilter: action
    })
  }

  setFilter(value: string) {
    this.filter = value
  }
}

export default new pokemonsFilter()