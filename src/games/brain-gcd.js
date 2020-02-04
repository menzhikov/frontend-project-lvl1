import getRandomInt from '..';
import { checkAnswer, intro, game } from '../brain-games';

const MAX = 20;
const TITLE = 'Find the greatest common divisor of given numbers.\n';

const calcGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return calcGCD(b, a % b);
};

const gcdTurn = (score) => {
  const a = getRandomInt(MAX);
  const b = getRandomInt(MAX);
  return checkAnswer(`${a} ${b}`, `${calcGCD(a, b)}`, score);
};

const run = () => {
  intro(TITLE);
  game(gcdTurn);
};

export default run;
