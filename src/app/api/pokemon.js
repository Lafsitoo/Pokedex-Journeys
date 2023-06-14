import axios from "axios";

export async function getAllPokemons() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
  const pokemons = response.data.results;

  const pokemonDataPromises = pokemons.map(async pokemon => {
    const pokemonResponse = await axios.get(pokemon.url);
    const pokemonData = pokemonResponse.data;
    return {
      ...pokemonData,
      sprites: pokemonData.sprites.front_default
    };
  });

  const pokemonData = await Promise.all(pokemonDataPromises);

  return pokemonData;
}
