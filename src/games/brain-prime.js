import getRandomInt from '..';
import game from '../brain-games';

const MAX = 3000;
const TITLE = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

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

const primeTurn = () => {
  const num = getRandomInt(MAX);
  const query = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';

  return { query, answer };
};

const run = () => {
  game(primeTurn, TITLE);
};

export default run;
