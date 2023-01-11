import './style.css';
import start from './modules/start.js';
import InvolvementAPI from './modules/involvementAPI.js';

start();

const cardList = document.getElementById('pokeList');
cardList.addEventListener('click', (e) => {
  if (e.target.classList.contains('likes')) {
    InvolvementAPI.postLike(e.target.id);
  }
});