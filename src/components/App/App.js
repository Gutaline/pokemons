import Container from '../Container/Container';

function App() {
  let a = [
    {
      id: 1,
      name: 'bulba',
      sprites: {
        other: {
          dream_world: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
          },
        },
      },
      types: [{ type: 'grass' }, { type: 'grass' }],
    },
    {
      id: 2,
      name: 'bulba',
      sprites: {
        other: {
          dream_world: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
          },
        },
      },
      types: [{ type: 'grass' }, { type: 'grass' }],
    },
    {
      id: 3,
      name: 'bulba',
      sprites: {
        other: {
          dream_world: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
          },
        },
      },
      types: [{ type: 'grass' }, { type: 'grass' }],
    },
  ];

  return (
    <div className="App">
      <Container pokemonsList={a} />
    </div>
  );
}

export default App;

// import { useEffect, useState } from 'react';

// const [allPokemons, setAllPokemons] = useState([]);
// const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

// const getAllPokemons = async () => {
//   const res = await fetch(loadMore);
//   const data = await res.json();

//   setLoadMore(data.next);

//   function createPokemonObject(results) {
//     results.forEach(async pokemon => {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//       const data = await res.json();
//       setAllPokemons(currentList => [...currentList, data]);
//       await allPokemons.sort((a, b) => a.id - b.id);
//     });
//   }

//   createPokemonObject(data.results);
// };

// useEffect(() => {
//   getAllPokemons();
// }, []);
