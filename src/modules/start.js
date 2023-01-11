import PokemonData from './pokemondata.js';
import pokedexPopup from './pokedexPopup.js';
import { getAllLikes } from './likeCounter.js';
import InvolvementAPI from './involvementAPI.js';

var count = 0;

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
      const id = element.id;
      await pokedexPopup(id);
      const commentContainer = document.querySelector('.comments-container');
      const username = document.querySelector('.username');
      const comment = document.querySelector('.comment-text');
      const form = document.querySelector('form');
      const heading = document.querySelector('.comment-heading');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const data = await InvolvementAPI.postComment(id, username.value, comment.value);
        if (data === 201) {
          count += 1;
        }
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // January is 0
        const day = currentDate.getDate();

        const dateString = `${year}-${month}-${day}`;

        const commentOnDom = document.createElement('h3');
        commentOnDom.innerHTML = `
        ${username.value} : ${comment.value} (${dateString})
        `;
        username.value = '';
        comment.value = '';
        commentContainer.appendChild(commentOnDom);
        heading.innerHTML = `Comments (${count})`;
      });
    });
  });
}