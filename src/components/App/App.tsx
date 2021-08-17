import React, {useEffect,useState} from 'react'
import Container from '../Container/Container'

import {IPoki} from "../../interface";



export const App:React.FC = () => {

  const [allPokemons, setAllPokemons] = useState<IPoki[]>([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    async function createPokemonObject(results:IPoki[]) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        const resAbility = await fetch(
          `https://pokeapi.co/api/v2/ability/${data.abilities[0].ability.name}`,
        );
        const dataAbility = await resAbility.json();
        const dataAbilityDescr = dataAbility.effect_entries;

        data.abildesr = dataAbilityDescr;

        setAllPokemons(currenList => [...currenList, data]);
      });
    }

    createPokemonObject(data.results);
  };

 
  allPokemons.sort((a, b) => a.id - b.id);

  useEffect(() => {
    getAllPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checkFavorPoki() {
    const a = JSON.parse(localStorage.getItem('poki')!);
    let favorPoki:number[] = [];

    if (a) {
      a.forEach((item:any, index:number) => {
        favorPoki[index] = item.id;
      });

      allPokemons.forEach(item => {
        if (favorPoki.includes(item.id)) {
          item.favor = true;
        }
      });
    }
  }

  checkFavorPoki();

  return (
    <div className="App">
      <Container pokemonsList={allPokemons} />
    </div>
  );
}

export default App;
