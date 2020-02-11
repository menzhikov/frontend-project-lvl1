import getRandomInt from '..';
import game from '../brain-games';

const MIN = 0;
const MAX = 20;
const TITLE = 'Find the greatest common divisor of given numbers.';

const calcGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return calcGCD(b, a % b);
};

const makeQuiz = () => {
  const a = getRandomInt(MIN, MAX);
  const b = getRandomInt(MIN, MAX);
  const question = `${a} ${b}`;
  const answer = calcGCD(a, b);

  return { question, answer: answer.toString() };
};

const run = () => {
  game(makeQuiz, TITLE);
};

export default run;
