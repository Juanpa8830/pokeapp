import getData from './getData.js';
import popupGenerator from './popupGenerator.js';
import likeCounter from './likeCounter.js';
import InvolvementAPI from './involvementAPI.js';
import commentCounter from './commentCounter.js';
import pokemonData from './pokemondata.js';

const popup = document.querySelector('.popup');

const url = 'https://pokeapi.co/api/v2/ability/';

export default async function pokedexPopup(id) {
  const api = new pokemonData();
  const pokemons = await api.getmultiplePokemon(1, 24);
  const data = await getData(`${url}${id}`);
  const description = data.effect_entries[1].effect;
  for (let i = 0; i < pokemons.length; i += 1) {
    if (pokemons[i].id === parseInt(id)) {
      popupGenerator(pokemons[i].image, pokemons[i].name, description);
      break;
    }
  }
}