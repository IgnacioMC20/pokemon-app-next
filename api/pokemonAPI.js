

const baseURL = 'https://pokeapi.co/api/v2';

export const getPokemons = async () => {
    const url = `${baseURL}/pokemon?limit=151`;
    const response = await fetch(url);
    const pokemons = await response.json();

    pokemons.results.forEach((poke, i) => {
        poke.id = i + 1;
        poke.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;
    })

    return pokemons;
}

export const getPokemon = async (id) => {
    const url = `${baseURL}/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    return {
        name: pokemon.name,
        sprites: pokemon.sprites,
        image: pokemon.sprites.other.dream_world.front_default,
        id,
        index: pokemon.id,
    }
}

export const getNames = async() => {
  const data = await fetch(`${baseURL}/pokemon?limit=151`);
  const { results } = await data.json();
    return results.map(({ name }) => name);
}