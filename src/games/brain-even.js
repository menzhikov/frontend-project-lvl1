import { getRandomInt, getAnswer, printQuestion } from '..';
import { checkAnswer } from './brain-games';

const MAX = 20;
const YES = 'yes';
const NO = 'no';

const evenTurn = (score) => {
  const number = getRandomInt(MAX);
  printQuestion(number);
  const answer = getAnswer();
  const isEven = number % 2 === 0;
  const correct = isEven ? YES : NO;
  return checkAnswer(answer, correct, score);
};

export default evenTurn;
