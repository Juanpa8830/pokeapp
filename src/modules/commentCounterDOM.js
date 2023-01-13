export default function commentCounterDOM() {
  const userCommentOnDOM = document.querySelectorAll('.user-comments');
  if (userCommentOnDOM.length !== 0) {
    return userCommentOnDOM.length;
  }
  return 0;
}