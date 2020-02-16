import getRandomInt from '../utils';
import play from '../brain-games-engine';

const min = 0;
const max = 20;
const length = 10;
const title = 'What number is missing in the progression?';

const createProgression = () => {
  const firstTerm = getRandomInt(min, max);
  const difference = getRandomInt(min, max);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstTerm + i * difference);
  }
  return progression;
};

const makeQuiz = () => {
  const progression = createProgression();
  const answerIndex = getRandomInt(min, length - 1);
  const answer = `${progression[answerIndex]}`;
  progression[answerIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

const run = () => {
  play(makeQuiz, title);
};

export default run;
