import getRandomInt from '..';
import { checkAnswer, intro, game } from '../brain-games';

const MAX = 20;
const YES = 'yes';
const NO = 'no';
const TITLE = 'Welcome to Answer "yes" if number even otherwise answer "no".\n';

const evenTurn = (score) => {
  const number = getRandomInt(MAX);
  const correct = number % 2 === 0 ? YES : NO;
  return checkAnswer(number, correct, score);
};

const run = () => {
  intro(TITLE);
  game(evenTurn);
};

export default run;
