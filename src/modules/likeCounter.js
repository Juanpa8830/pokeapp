import InvolvementAPI from './involvementAPI';

export default async function likeCounter(id) {
  const allLikes = await InvolvementAPI.getLikes();
  for (let i = 0; i < allLikes.length; i += 1) {
    if (allLikes[i].item_id === id) {
      return allLikes[i].likes;
    }
  }
  return 0;
}