import pokemonData from "./modules/pokemondata.js";

 async function start() {
    const api = new pokemonData();
    const pokemons = await api.getmultiplePokemon(1,24);
    
    const pokeList = document.getElementById('pokeList');
    pokemons.forEach((pokemon) =>{
        pokeList.innerHTML+= `
        <div id="pokecard">
        <p id="name">${pokemon.name}</p>
        <p id="id">${pokemon.id}</p>
        <img id="image" src="${pokemon.image}" alt="">
        <p id="types">${pokemon.pokeTypes}</p>
        </div>
        `
    });
   
}
export default start