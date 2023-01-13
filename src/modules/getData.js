export default async function getData(url) {
  const response = await fetch(url); // wait until response is recorded from the URL
  const data = await response.json(); // wait until response is parsed as JSON
  return data; // return result to show on DOM
}