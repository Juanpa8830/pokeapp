import PokemonData from './pokemondata.js';
import pokedexPopup from './pokedexPopup.js';
import { getAllLikes } from './likeCounter.js';

let allLikes = [];
async function readAllLikes() {
  allLikes = await getAllLikes();
}

export function scanLikes(id) {
  const likesNumber = allLikes.find((item) => item.item_id === id);
  if (likesNumber === undefined) {
    return 0;
  }
  return likesNumber.likes;
}

export default async function start() {
  await readAllLikes();
  const Api = new PokemonData();
  const pokemons = await Api.getmultiplePokemon(1, 24);
  const pokeList = document.getElementById('pokeList');
  pokemons.forEach((pokemon) => {
    const likeID = `like${pokemon.id}`;
    const commentID = pokemon.id;
    const reserveID = `reserve${pokemon.id}`;
    pokeList.innerHTML += `
        <div id="pokecard">
        <p id="id">${pokemon.id}</p>
        <p id="name">${pokemon.name}</p>
        <img id="image" src="${pokemon.image}" alt="">
        <p id="types">${pokemon.pokeTypes}</p>
        <button class="likes" id=${likeID} type="submit">Likes (${scanLikes(likeID)})</button>
        <button class="comments" id=${commentID} type="submit">Comments</button>
        <button class="reserve" id=${reserveID} type="submit">Reserve</button>
        </div>
        `;
  });
  const allCommentButtons = document.querySelectorAll('.comments');
  allCommentButtons.forEach((element) => {
    element.addEventListener('click', async () => {
      const { id } = element;
      pokedexPopup(id);
    });
  });
}