import { cons, car, cdr } from '@hexlet/pairs';
import getRandomInt from '..';
import { checkAnswer, intro, game } from '../brain-games';

const MAX = 25;
const TITLE = 'What is the result of the expression?\n';
const operations = ['+', '-', '*'];

const getExpression = () => {
  const a = getRandomInt(MAX);
  const b = getRandomInt(MAX);
  switch (operations[getRandomInt(MAX) % operations.length]) {
    case '+': return cons(`${a} + ${b}`, `${a + b}`);
    case '-': return cons(`${a} - ${b}`, `${a - b}`);
    case '*': return cons(`${a} * ${b}`, `${a * b}`);
    default: return null;
  }
};

const calcTurn = (score) => {
  const pair = getExpression();
  return checkAnswer(car(pair), cdr(pair), score);
};

const run = () => {
  intro(TITLE);
  game(calcTurn);
};

export default run;
