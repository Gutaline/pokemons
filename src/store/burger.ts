import {action, makeAutoObservable, observable} from 'mobx'

class burger {
  burgerState = false

  constructor() {
    makeAutoObservable(this, {
      burgerState: observable,
      setReverseState: action
    })
  }
  setReverseState() {
    this.burgerState = !this.burgerState
  }
  setBurgerFalse() {
    this.burgerState = false
  }
}

export default new burger()
