import {action, makeAutoObservable, observable, runInAction} from 'mobx'
import {boolean, never} from 'zod'

import {IPoki} from '../interface'
class allPoki {
  api = 'https://pokeapi.co/api/v2/pokemon?limit=20'
  myData:any = null
  count:IPoki[] = []
  constructor() {
    makeAutoObservable(this, {
      count: observable,
      getPoki: action,
      falseFavor: action,
      trueFavor: action
    })
  }

  async getPoki() {
    const res = await fetch(this.api)
    const data = await res.json()

    this.api = data.next
    this.myData = data.results
    this.createPokemonObject(this.myData)
  }

  async createPokemonObject(results:IPoki[]) {
    results.forEach(async (pokemon) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      )
      const data = await res.json()

      const resAbility = await fetch(
        `https://pokeapi.co/api/v2/ability/${data.abilities[0].ability.name}`
      )
      const dataAbility = await resAbility.json()
      const dataAbilityDescr = dataAbility.effect_entries

      data.abildesr = dataAbilityDescr

      runInAction(() => {
        this.count = [...this.count, data]
        this.count.sort((a, b) => a.id - b.id)
      })
    })
  }

  falseFavor(id:number) {
    if( id < this.count.length) {
    this.count[id - 1].favor = false
  
     }
  }

  trueFavor(id:number) {
    if( id < this.count.length) {
     
      this.count[id - 1].favor = true
    }
  }
}

export default new allPoki()