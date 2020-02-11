import getRandomInt from '..';
import game from '../brain-games';

const MIN = 0;
const MAX = 20;
const LENGTH = 10;
const TITLE = 'What number is missing in the progression?';

const createProgression = () => {
  const firstTerm = getRandomInt(MIN, MAX);
  const difference = getRandomInt(MIN, MAX);
  const progression = [];
  for (let i = 0; i < LENGTH; i += 1) {
    progression.push(firstTerm + i * difference);
  }
  return progression;
};

const makeQuiz = () => {
  const progression = createProgression();
  const answerIndex = getRandomInt(MIN, LENGTH - 1);
  const answer = `${progression[answerIndex]}`;
  progression[answerIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

const run = () => {
  game(makeQuiz, TITLE);
};

export default run;
