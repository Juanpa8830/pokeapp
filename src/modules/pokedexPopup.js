import getData from './getData.js';
import popupGenerator from './popupGenerator.js';
import commentCounter from './commentCounter.js';
import PokemonData from './pokemondata.js';

const url = 'https://pokeapi.co/api/v2/ability/';

export default async function pokedexPopup(id) {
  const api = new PokemonData();
  const pokemons = await api.getmultiplePokemon(1, 24);
  const data = await getData(`${url}${id}`);
  const allComments = await commentCounter(id);
  const description = data.effect_entries[1].effect;
  for (let i = 0; i < pokemons.length; i += 1) {
    if (pokemons[i].id === parseInt(id, 10)) {
      popupGenerator(pokemons[i].image, pokemons[i].name, description, allComments);
      break;
    }
  }
}