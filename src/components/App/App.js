import { useEffect, useState } from 'react';
import Container from '../Container/Container';

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setAllPokemons(currentList => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
  };

  let sortPoki = allPokemons;
  sortPoki.sort((a, b) => a.id - b.id);

  useEffect(() => {
    getAllPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checkFavorPoki() {
    const a = JSON.parse(localStorage.getItem('poki'));
    let b = [];

    if (a) {
      a.forEach((item, index) => {
        b[index] = item.id;
      });

      allPokemons.forEach(item => {
        if (b.includes(item.id)) {
          item.favor = true;
        }
      });
    }
  }

  checkFavorPoki();
  // console.log(allPokemons);

  return (
    <div className="App">
      <Container pokemonsList={sortPoki} />
    </div>
  );
}

export default App;
