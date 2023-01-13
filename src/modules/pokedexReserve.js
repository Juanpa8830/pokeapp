import getData from './getData.js';
import PokemonData from './pokemondata.js';
import popupReserve from './popupReserve.js';
import reserveCounter from './reserveCounter.js';

const url = 'https://pokeapi.co/api/v2/ability/';

export default async function pokedexReserve(id) {
  const api = new PokemonData();
  const pokemons = await api.getmultiplePokemon(1, 20);
  const data = await getData(`${url}${id}`);
  const description = data.effect_entries[1].effect;
  const allReserves = await reserveCounter(id);
  for (let i = 0; i < pokemons.length; i += 1) {
    if (pokemons[i].id === parseInt(id, 10)) {
      popupReserve(pokemons[i].image, pokemons[i].name, description, allReserves);
      break;
    }
  }
}