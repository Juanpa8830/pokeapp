const popup = document.querySelector('.popup');

export default function popupGenerator(img, title, description, allComments) {
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
      <div class="comments-container">

      </div>
      <div class="formDiv">
        <form id="add-comment">
          <h2>Add Comment</h2>
          <label for="">Your name</label>
          <div>
            <input type="text" name="name" class="username" required>
          </div>
          <label for="">Your insights</label>
          <div>
            <textarea name="insights" id="" cols="30" rows="10" class="comment-text" required></textarea>
          </div>
          <input type="submit" name="comment" id="comment-btn" title="Comment">
        </form>
      </div>
    </div>
  </div>
</div>
  `;

  const commentContainer = document.querySelector('.comments-container');
  commentContainer.innerHTML = `
  <h2 class="comment-heading">Comments (${allComments.length})</h2>
  `;

  if (allComments.length !== 0) {    
    for (let i = allComments.length - 1; i >= 0; i -= 1) {
      commentContainer.innerHTML += `
      <h3>${allComments[i].username} : ${allComments[i].comment} (${allComments[i].creation_date})</h3>;
      `;
    }
  }

  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    popup.innerHTML = '';
  });
}
