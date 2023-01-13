/**
 * @jest-environment jsdom
 */
​
import reserveCounterDOM from './modules/reserveCounterDOM.js';
​
document.body.innerHTML = `
<div class="reserve-container">
  <h2 class="reserve-heading">reserves</h2>
</div>
`;
const reserveContainer = document.querySelector('.reserve-container');
​
describe('Test the reserve counter function:', () => {
  test('Adding first reserve', () => {
    const userreserves = document.createElement('h3');
    userreserves.classList.add('user-reserves');
    userreserves.innerHTML = 'Start Date 1 - End Date 1 by User 1';
    reserveContainer.appendChild(userreserves);
    const noOfreserves = reserveCounterDOM();
    expect(noOfreserves).toBe(1);
  });
​
  test('Adding second reserve', () => {
    const userreserves = document.createElement('h3');
    userreserves.classList.add('user-reserves');
    userreserves.innerHTML = 'Start Date 2 - End Date 2 by User 2';
    reserveContainer.appendChild(userreserves);
    const noOfreserves = reserveCounterDOM();
    expect(noOfreserves).toBe(2);
  });
​
  test('Adding third reserve', () => {
    const userreserves = document.createElement('h3');
    userreserves.classList.add('user-reserves');
    userreserves.innerHTML = 'Start Date 3 - End Date 3 by User 3';
    reserveContainer.appendChild(userreserves);
    const noOfreserves = reserveCounterDOM();
    expect(noOfreserves).toBe(3);
  });
​
  test('Adding fourth reserve', () => {
    const userreserves = document.createElement('h3');
    userreserves.classList.add('user-reserves');
    userreserves.innerHTML = 'Start Date 4 - End Date 4 by User 4';
    reserveContainer.appendChild(userreserves);
    const noOfreserves = reserveCounterDOM();
    expect(noOfreserves).toBe(4);
  });
});