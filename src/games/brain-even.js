import getRandomInt from '..';
import game from '../brain-games';

const MIN = 0;
const MAX = 20;
const YES = 'yes';
const NO = 'no';
const TITLE = 'Welcome to Answer "yes" if number even otherwise answer "no".';

const makeQuiz = () => {
  const question = getRandomInt(MIN, MAX);
  const answer = question % 2 === 0 ? YES : NO;

  return { question, answer };
};

const run = () => {
  game(makeQuiz, TITLE);
};

export default run;
