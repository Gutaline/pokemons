import {action, makeAutoObservable, observable} from 'mobx'

class mobile {
  mobileState = false

  constructor() {
    makeAutoObservable(this, {
      mobileState: observable,
      setReverseState: action,
      activeMobile: action,
      disableMobile: action
    })
  }
  setReverseState() {
    this.mobileState = !this.mobileState
  }
  activeMobile() {
    this.mobileState = true
  }

  disableMobile() {
    this.mobileState = false
  }
}

export default new mobile()
