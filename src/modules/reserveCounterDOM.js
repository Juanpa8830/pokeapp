export default function reserveCounterDOM() {
  const userReservation = document.querySelectorAll('.user-reserves');
  if (userReservation.length !== 0) {
    return userReservation.length;
  }
  return 0;
}