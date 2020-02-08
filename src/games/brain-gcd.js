import getRandomInt from '..';
import game from '../brain-games';

const MAX = 20;
const TITLE = 'Find the greatest common divisor of given numbers.\n';

const calcGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return calcGCD(b, a % b);
};

const gcdTurn = () => {
  const a = getRandomInt(MAX);
  const b = getRandomInt(MAX);
  const query = `${a} ${b}`;
  const answer = `${calcGCD(a, b)}`;

  return { query, answer };
};

const run = () => {
  game(gcdTurn, TITLE);
};

export default run;
