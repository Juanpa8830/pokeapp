function AllPokesCounter() {
    const pokeCount = document.querySelectorAll('.pokecard').length;
    const pokeCountText = document.getElementById('pokedex');
    pokeCountText.textContent = `Pokedex(${pokeCount})`;
}

  export default AllPokesCounter;