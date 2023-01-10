import InvolvementAPI from './involvementAPI.js';

export default async function commentCounter(id) {
  const allComments = await InvolvementAPI.getComments(id);
  if (allComments !== 400) {
    return allComments;
  }
  return [];
}