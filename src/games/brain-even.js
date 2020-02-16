import getRandomInt from '../utils';
import play from '../brain-games-engine';

const min = 0;
const max = 20;
const title = 'Welcome to Answer "yes" if number even otherwise answer "no".';

const makeQuiz = () => {
  const question = getRandomInt(min, max);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return { question, answer };
};

const run = () => {
  play(makeQuiz, title);
};

export default run;
