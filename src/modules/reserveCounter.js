import InvolvementAPI from "./involvementAPI";

export default async function reserveCounter(id) {
  const allReserves = await InvolvementAPI.getReserve(id);
  if (allReserves !== 400) {
    return allReserves;
  }
  return [];
}