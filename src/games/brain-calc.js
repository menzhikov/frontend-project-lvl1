import { cons, car, cdr } from '@hexlet/pairs';
import { getRandomInt, getAnswer, printQuestion } from '..';
import { checkAnswer } from './brain-games';

const MAX = 25;

const getExpression = () => {
  const a = getRandomInt(MAX);
  const b = getRandomInt(MAX);
  switch (getRandomInt(MAX) % 3) {
    case 0: return cons(`${a} + ${b}`, `${a + b}`);
    case 1: return cons(`${a} - ${b}`, `${a - b}`);
    case 2: return cons(`${a} * ${b}`, `${a * b}`);
    default: return null;
  }
};

const calcTurn = (score) => {
  const pair = getExpression();
  printQuestion(car(pair));
  const answer = getAnswer();
  return checkAnswer(answer, cdr(pair), score);
};

export default calcTurn;
