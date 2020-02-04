import readlineSync from 'readline-sync';

let userName;
const MAX_SCORE = 3;

const intro = (title) => {
  console.log('Welcome to the Brain Games!');
  if (title != null) {
    console.log(title);
  }
};

const game = (turn) => {
  let score = 0;
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  while (score < MAX_SCORE) {
    score = turn(score);
  }
  console.log(`Congratulations, ${userName}!`);
};

const printErrorMessage = (answer, correct) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`);

const checkAnswer = (query, correct, score) => {
  console.log(`Question: ${query}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correct) {
    console.log('Correct!');
    return score + 1;
  }
  printErrorMessage(answer, correct);
  return score;
};

export { intro, game, checkAnswer };
