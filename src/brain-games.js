import readlineSync from 'readline-sync';

let userName;
const MAX_SCORE = 3;

const intro = (title) => {
  console.log('Welcome to the Brain Games!');
  if (title != null) {
    console.log(title);
  }
};

const game = (quiz, title) => {
  intro(title);

  if (quiz != null) {
    userName = readlineSync.question('\nMay I have your name? ');
    console.log(`Hello, ${userName}!\n`);
    for (let i = 0; i < MAX_SCORE; i += 1) {
      const response = quiz();
      console.log(`Question: ${response.question}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === response.answer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${response.answer}'.\nLet's try again, ${userName}!`);
      }
    }

    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
