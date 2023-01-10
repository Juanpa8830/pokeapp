import pokemonData from "./modules/pokemondata.js";
import pokedexPopup from "./modules/pokedexPopup.js";

export default async function start() {
    const api = new pokemonData();
    const pokemons = await api.getmultiplePokemon(1, 24);
    const pokeList = document.getElementById('pokeList');
    pokemons.forEach((pokemon) => {
        const likeID = "like" + pokemon.id;
        const commentID = pokemon.id;
        const reserveID = "reserve" + pokemon.id;
        pokeList.innerHTML += `
        <div id="pokecard">
        <p id="id">${pokemon.id}</p>
        <p id="name">${pokemon.name}</p>
        <img id="image" src="${pokemon.image}" alt="">
        <p id="types">${pokemon.pokeTypes}</p>
        <button class="likes" id=${likeID} type="submit">Likes</button>
        <button class="comments" id=${commentID} type="submit">Comments</button>
        <button class="reserve" id=${reserveID} type="submit">Reserve</button>
        </div>
        `;
    });
    const allCommentButtons = document.querySelectorAll('.comments');
    allCommentButtons.forEach((element) => {
        element.addEventListener('click', async () => {
            const id = element.id;
            pokedexPopup(id);
        })
    })
}