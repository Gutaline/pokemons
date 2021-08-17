import { makeAutoObservable } from 'mobx';

class allPoki {
  constructor() {
    makeAutoObservable(this);
  }
  list = [];
  pokiList(massive) {
    this.list = massive;
    console.log(this.list);
  }
}

export default new allPoki();
