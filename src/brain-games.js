import readlineSync from 'readline-sync';

let userName;
const MAX_SCORE = 3;

const intro = (title) => {
  console.log('Welcome to the Brain Games!');
  if (title != null) {
    console.log(title);
  }
};

const checkAnswer = (query, correct, score) => {
  console.log(`Question: ${query}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correct) {
    console.log('Correct!');
    return score + 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`);
  return score;
};

const game = (turn, title) => {
  intro(title);

  if (turn != null) {
    let score = 0;
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\n`);
    while (score < MAX_SCORE) {
      const response = turn();
      score = checkAnswer(response.query, response.answer, score);
    }

    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
