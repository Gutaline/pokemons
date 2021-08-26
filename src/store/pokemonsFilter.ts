import {action, makeAutoObservable, observable} from 'mobx'

class pokemonsFilter {
  filter = 'All'
  inputValue = ''

  constructor() {
    makeAutoObservable(this, {
      filter: observable,
      inputValue: observable,
      setFilter: action
    })
  }

  setFilter(value: string) {
    this.filter = value
  }
  setInputValue(value:string) {
    this.inputValue = value;
  }
}

export default new pokemonsFilter()