import {action, makeAutoObservable, observable} from 'mobx'

class visible {
  Abilites = false
  Class = false

  constructor() {
    makeAutoObservable(this, {
      Abilites: observable,
      Class: observable,
      setVisibleAbilites: action,
      setVisibleClass: action
    })
  }

  setVisibleAbilites() {
    this.Abilites = !this.Abilites
  }

  setVisibleClass() {
    this.Class = !this.Class
  }
}

export default new visible()
