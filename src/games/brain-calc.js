import getRandomInt from '../utils';
import play from '../brain-games-engine';

const min = 0;
const max = 25;
const title = 'What is the result of the expression?';
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
  const a = getRandomInt(min, max);
  const b = getRandomInt(min, max);
  const operation = operations[getRandomInt(max) % operations.length];
  const answer = calculate(a, b, operation);
  const question = `${a} ${operation} ${b}`;

  return { question, answer: answer.toString() };
};

const run = () => {
  play(makeQuiz, title);
};

export default run;
