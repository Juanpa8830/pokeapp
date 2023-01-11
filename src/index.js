import './style.css';
import start from './modules/start.js';
import InvolvementAPI from './modules/involvementAPI.js';
import likeCounter from './modules/likeCounter.js';

window.addEventListener('DOMContentLoaded', () => {
  start();
})

const cardList = document.getElementById('pokeList');
cardList.addEventListener('click', async (e) => {
  if (e.target.classList.contains('likes')) {
    await InvolvementAPI.postLike(e.target.id);
  }
  const nLikes = await likeCounter(e.target.id);
  const showLike = document.getElementById(e.target.id);
  showLike.innerHTML = `Likes (${nLikes})`;
});