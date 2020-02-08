import getRandomInt from '..';
import game from '../brain-games';

const MAX = 20;
const LENGTH = 10;
const TITLE = 'What number is missing in the progression?\n';

const createProgression = () => {
  const q = getRandomInt(MAX);
  const d = getRandomInt(MAX);
  const arr = [];
  for (let i = 0; i < LENGTH; i += 1) {
    arr.push(q + i * d);
  }
  return arr;
};

const progressionTurn = () => {
  const arr = createProgression();
  const index = getRandomInt(LENGTH - 1);
  const answer = `${arr[index]}`;
  arr[index] = '..';
  const query = arr.join(' ');

  return { query, answer };
};

const run = () => {
  game(progressionTurn, TITLE);
};

export default run;
