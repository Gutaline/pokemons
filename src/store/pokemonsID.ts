import {action, makeAutoObservable, observable} from 'mobx'

class pokemonsID {
  idPoki = 0
  pokifavor = false

  constructor() {
    makeAutoObservable(this, {
      idPoki: observable,
      setIdPoki: action
    })
  }

<<<<<<< HEAD:src/store/pokemonsID.ts
  setIdPoki(value:number,param:boolean) {
=======
  setIdPoki(value: number) {
>>>>>>> 00fa0b068739d542b1771a212509fca10d9a8ae7:src/store/pokemonsID.js
    this.idPoki = value
    this.pokifavor = param;
  }
  

}

export default new pokemonsID()
