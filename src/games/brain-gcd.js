import getRandomInt from '../utils';
import play from '../brain-games-engine';

const min = 0;
const max = 20;
const title = 'Find the greatest common divisor of given numbers.';

const calcGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return calcGCD(b, a % b);
};

const makeQuiz = () => {
  const a = getRandomInt(min, max);
  const b = getRandomInt(min, max);
  const question = `${a} ${b}`;
  const answer = calcGCD(a, b);

  return { question, answer: answer.toString() };
};

const run = () => {
  play(makeQuiz, title);
};

export default run;
