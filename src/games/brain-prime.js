import getRandomInt from '../utils';
import play from '../brain-games-engine';

const min = 0;
const max = 3000;
const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 3) {
    return n > 1;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;

  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

const makeQuiz = () => {
  const question = getRandomInt(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question: question.toString(), answer };
};

const run = () => {
  play(makeQuiz, title);
};

export default run;
