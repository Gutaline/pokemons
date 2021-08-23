import {action, makeAutoObservable, observable} from 'mobx'

class showHeart {
  heart = true

  constructor() {
    makeAutoObservable(this, {
      heart: observable,
      heartActive: action,
      heartDisable: action
    })
  }

  heartActive() {
    this.heart = true
  }

  heartDisable() {
    this.heart = false
  }
}

export default new showHeart()
