import { getRandomInt, getAnswer, printQuestion } from '..';
import { checkAnswer } from './brain-games';

const MAX = 20;

const calcGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return calcGCD(b, a % b);
};

const gcdTurn = (score) => {
  const a = getRandomInt(MAX);
  const b = getRandomInt(MAX);
  printQuestion(`${a} ${b}`);
  const answer = getAnswer();
  return checkAnswer(answer, `${calcGCD(a, b)}`, score);
};

export default gcdTurn;
