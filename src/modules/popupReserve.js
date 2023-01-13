const popup = document.querySelector('.popup');

export default function popupReserve(img, title, description, allReserves) {
  popup.innerHTML = `
  <div class="modal" id="modal">
  <div class="modal-content">
    <div class="card-preview-header">
      <h2 class="work-title-preview">${title}</h2>
      <span class="close">&times;</span>
    </div>
    <img src=${img} class="article-img" alt="Image cover">
    <div class="article-content">
      <h3 class="article-sub-title">${description}</h3>
      <div class="reserve-container">

      </div>
      <form id="add-reserve">
        <input placeholder="Your name" id="reserve-name" class="reserve-input">
        <input placeholder="Start date" id="reserve-start" class="reserve-input">
        <input placeholder="End date" id="reserve-end" class="reserve-input">
        <button type="submit" id="reserve-btn">Reserve</button>
      </form>
      `;

  const reserveContainer = document.querySelector('.reserve-container');
  reserveContainer.innerHTML = `
      <h2 class="comment-heading">Reservations (${allReserves.length})</h2>
      `;

  if (allReserves.length !== 0) {
    for (let i = allReserves.length - 1; i >= 0; i -= 1) {
      reserveContainer.innerHTML += `
          <h3 class="user-reserves">${allReserves[i].date_start} - ${allReserves[i].date_end} by ${allReserves[i].username}</h3>
          `;
    }
  }

  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    popup.innerHTML = '';
  });
}