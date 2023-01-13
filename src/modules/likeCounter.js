import InvolvementAPI from './involvementAPI.js';

export default async function likeCounter(id) {
  const allLikes = await InvolvementAPI.getLikes();
  for (let i = 0; i < allLikes.length; i += 1) {
    if (allLikes[i].item_id === id) {
      return allLikes[i].likes;
    }
  }
  return 0;
}

export async function getAllLikes() {
  const allLikes = await InvolvementAPI.getLikes();
  return allLikes;
}