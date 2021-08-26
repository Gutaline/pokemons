import {makeAutoObservable, observable} from 'mobx'

class searchItems {
  itemClass = ['grass', 'normal', 'fire', 'water', 'bug']
  itemAbility = [
    'overgroth',
    'blaze',
    'shield-dust',
    'shed-skin',
    'compound-eyes',
    'swarm',
    'keen-eye',
    'run-away',
    'torrent'
  ]

  constructor() {
    makeAutoObservable(this, {
      itemClass: observable,
      itemAbility: observable
    })
  }
}

export default new searchItems()
