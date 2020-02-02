import { getRandomInt, getAnswer, printQuestion } from '..';
import { checkAnswer } from './brain-games';

const MAX = 20;
const LENGTH = 10;

const createProgression = () => {
  const q = getRandomInt(MAX);
  const d = getRandomInt(MAX);
  const arr = [];
  for (let i = 0; i < LENGTH; i += 1) {
    arr.push(q + i * d);
  }
  return arr;
};

const progressionTurn = (score) => {
  const arr = createProgression();
  const index = getRandomInt(LENGTH - 1);
  const correct = `${arr[index]}`;
  arr[index] = '..';
  printQuestion(arr.join(' '));
  const answer = getAnswer();
  return checkAnswer(answer, correct, score);
};

export default progressionTurn;
