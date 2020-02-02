import { getRandomInt, getAnswer, printQuestion } from '..';
import { checkAnswer } from './brain-games';

const MAX = 3000;

const isPrime = (n) => {
  if (n <= 3) {
    return n > 1;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;

  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

const primeTurn = (score) => {
  const num = getRandomInt(MAX);
  const correct = isPrime(num) ? 'yes' : 'no';
  printQuestion(`${num}`);
  const answer = getAnswer();
  return checkAnswer(answer, correct, score);
};

export default primeTurn;
