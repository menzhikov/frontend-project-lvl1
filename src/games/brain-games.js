import { readUserName } from '..';

let userName;

const intro = (title) => {
  console.log('Welcome to the Brain Games!');
  if (title != null) {
    console.log(title);
  }
  userName = readUserName();
};

const game = (turn) => {
  let score = 0;
  while (score < 3) {
    score = turn(score);
  }
  console.log(`Congratulations, ${userName}!`);
};

const printErrorMessage = (answer, correct) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`);

const checkAnswer = (answer, correct, score) => {
  if (answer === correct) {
    console.log('Correct!');
    return score + 1;
  }
  printErrorMessage(answer, correct);
  return score;
};

export { intro, game, checkAnswer };
