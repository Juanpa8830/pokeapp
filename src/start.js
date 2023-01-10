import pokemonData from "./modules/pokemondata.js";

 async function start() {
    const api = new pokemonData();
    const pokemons = await api.getmultiplePokemon(1,24);
    
    const pokeList = document.getElementById('pokeList');
    pokemons.forEach((pokemon) =>{
        pokeList.innerHTML+= `
        <div id="pokecard">
        <p id="id">${pokemon.id}</p>
        <p id="name">${pokemon.name}</p>
        <img id="image" src="${pokemon.image}" alt="">
        <p id="types">${pokemon.pokeTypes}</p>
        <button id="comments" type="submit">Comments</button>
        <button id="reserve" type="submit">Reserve</button>
        </div>
        `
    });
   
}
export default start