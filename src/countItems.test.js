/**
 * @jest-environment jsdom
 */

import AllPokesCounter from './modules/pokemonCounter.js';

test('pokeCounter.textcontent is equals to pokedex(20)', () => {
  // Arrange - acomodar todo para probar
  document.body.innerHTML = `
        <div>
        <div id="poke-cards-cont"></div>
        <li id="pokedex">Pokedex</li>
        </div>`;

  const pokeCont = document.getElementById('poke-cards-cont');
  let htmlCards = '';

  for (let i = 1; i <= 20; i += 1) {
    htmlCards += '<div class="pokecard"></div>';
  }
  pokeCont.innerHTML = htmlCards;

  // Action - ejecutar la funcion que estoy probando
  AllPokesCounter();

  // Assert - comparar si lo esperado es correcto
  const counter2 = document.getElementById('pokedex');
  expect(counter2.innerHTML).toStrictEqual('Pokedex(20)');
});
