import getRandomInt from '..';
import game from '../brain-games';

const MAX = 20;
const YES = 'yes';
const NO = 'no';
const TITLE = 'Welcome to Answer "yes" if number even otherwise answer "no".\n';

const evenTurn = () => {
  const query = getRandomInt(MAX);
  const answer = query % 2 === 0 ? YES : NO;

  return { query, answer };
};

const run = () => {
  game(evenTurn, TITLE);
};

export default run;
