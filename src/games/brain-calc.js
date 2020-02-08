import { cons, car, cdr } from '@hexlet/pairs';
import getRandomInt from '..';
import game from '../brain-games';

const MAX = 25;
const TITLE = 'What is the result of the expression?\n';
const operations = ['+', '-', '*'];

const getExpression = (a, b, operation) => {
  switch (operation) {
    case '+': return cons(`${a} + ${b}`, `${a + b}`);
    case '-': return cons(`${a} - ${b}`, `${a - b}`);
    case '*': return cons(`${a} * ${b}`, `${a * b}`);
    default: return null;
  }
};

const calcTurn = () => {
  const a = getRandomInt(MAX);
  const b = getRandomInt(MAX);
  const operation = operations[getRandomInt(MAX) % operations.length];
  const pair = getExpression(a, b, operation);
  const query = car(pair);
  const answer = cdr(pair);

  return { query, answer };
};

const run = () => {
  game(calcTurn, TITLE);
};

export default run;
