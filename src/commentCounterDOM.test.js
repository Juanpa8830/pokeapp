/**
 * @jest-environment jsdom
 */

import commentCounterDOM from './modules/commentCounterDOM.js';

document.body.innerHTML = `
<div class="comments-container">
  <h2 class="comment-heading">Comments</h2>
</div>
`;
const commentContainer = document.querySelector('.comments-container');

describe('Test the comment counter function:', () => {
  test('Adding first comment', () => {
    const userComments = document.createElement('h3');
    userComments.classList.add('user-comments');
    userComments.innerHTML = 'User 1: Comment 1 (Date 1)';
    commentContainer.appendChild(userComments);
    const noOfComments = commentCounterDOM();
    expect(noOfComments).toBe(1);
  });

  test('Adding second comment', () => {
    const userComments = document.createElement('h3');
    userComments.classList.add('user-comments');
    userComments.innerHTML = 'User 2: Comment 2 (Date 2)';
    commentContainer.appendChild(userComments);
    const noOfComments = commentCounterDOM();
    expect(noOfComments).toBe(2);
  });

  test('Adding third comment', () => {
    const userComments = document.createElement('h3');
    userComments.classList.add('user-comments');
    userComments.innerHTML = 'User 3: Comment 3 (Date 3)';
    commentContainer.appendChild(userComments);
    const noOfComments = commentCounterDOM();
    expect(noOfComments).toBe(3);
  });

  test('Adding fourth comment', () => {
    const userComments = document.createElement('h3');
    userComments.classList.add('user-comments');
    userComments.innerHTML = 'User 4: Comment 4 (Date 4)';
    commentContainer.appendChild(userComments);
    const noOfComments = commentCounterDOM();
    expect(noOfComments).toBe(4);
  });
});