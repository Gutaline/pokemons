import {action, makeAutoObservable, observable, runInAction} from 'mobx'
import {IPoki} from '../interface'

class allPoki {
  api = 'https://pokeapi.co/api/v2/pokemon?limit=20'
  pokemons: IPoki[] = []

  constructor() {
    makeAutoObservable(this, {
      pokemons: observable,
      getPoki: action,
      falseFavor: action,
      trueFavor: action
    })
  }

  async getPoki() {
    const res = await fetch(this.api)
    const data = await res.json()
    this.api = data.next
    this.createPokemonObject([])
    this.createPokemonObject.call(this, data.results)
  }

  createPokemonObject(results: IPoki[]) {
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
        this.pokemons = [...this.pokemons, data]
        this.pokemons.sort((a: IPoki, b: IPoki) => a.id - b.id)
      })
    })
  }

  falseFavor(id: number) {
    if (id < this.pokemons.length) {
      this.pokemons[id - 1].favor = false
    }
  }

  trueFavor(id: number) {
    if (id < this.pokemons.length) {
      this.pokemons[id - 1].favor = true
    }
  }
}

export default new allPoki()
