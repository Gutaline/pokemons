import {action, makeAutoObservable, observable} from 'mobx'

class favorItems {
  favorState = false

  constructor() {
    makeAutoObservable(this, {
      favorState: observable,
      favorActive: action,
      favorDisable: action
    })
  }

  favorActive() {
    this.favorState = true
  }

  favorDisable() {
    this.favorState = false
  }
}

export default new favorItems()
