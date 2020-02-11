import getRandomInt from '..';
import game from '../brain-games';

const MIN = 0;
const MAX = 25;
const TITLE = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: return null;
  }
};

const makeQuiz = () => {
  const a = getRandomInt(MIN, MAX);
  const b = getRandomInt(MIN, MAX);
  const operation = operations[getRandomInt(MAX) % operations.length];
  const answer = calculate(a, b, operation);
  const question = `${a} ${operation} ${b}`;

  return { question, answer: answer.toString() };
};

const run = () => {
  game(makeQuiz, TITLE);
};

export default run;
