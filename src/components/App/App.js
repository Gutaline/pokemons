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
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }

    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="App">
      <Container pokemonsList={allPokemons} />
    </div>
  );
}

export default App;
