class PokemonData {
    getPokemonData = async (pokeId) => {
      const pokedata = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then((response) => response.json());
        // object destructuring
      const {
        id, name, sprites, types,
      } = pokedata;
      const pokeTypes = [];
      types.forEach((element) => {
        pokeTypes.push(element.type.name);
      });
      const image = sprites.other.dream_world.front_default;
      return {
        id, name, pokeTypes, image,
      };
    }

    getmultiplePokemon = async (minpokeId, maxpokeId) => {
      const pokelist =[];
      for (let i = minpokeId; i<=maxpokeId; i += 1) {
        pokelist.push(this.getPokemonData(i))
      }
      return (await Promise.all(pokelist));
    }
}

export default PokemonData;
