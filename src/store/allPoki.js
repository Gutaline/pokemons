import { makeAutoObservable, runInAction } from 'mobx';

class allPoki {
  api = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  count = [];
  constructor() {
    makeAutoObservable(this);
  }


  async getPoki() {
    const res = await fetch(this.api);
    const data = await res.json();
    this.api = data.next;

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        const resAbility = await fetch(
          `https://pokeapi.co/api/v2/ability/${data.abilities[0].ability.name}`,
        );
        const dataAbility = await resAbility.json();
        const dataAbilityDescr = dataAbility.effect_entries;

        data.abildesr = dataAbilityDescr;

        runInAction(() => {
          this.count = [...this.count, data];
          this.count.sort((a, b) => a.id - b.id);
        });
      });
    }

    createPokemonObject.call(this, data.results);
  }
}

export default new allPoki();
