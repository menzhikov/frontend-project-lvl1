import readlineSync from 'readline-sync';

const turnsCount = 3;

const intro = (title) => {
  console.log('Welcome to the Brain Games!');
  console.log(title);
};

const play = (getQuiz, title) => {
  intro(title);

  if (getQuiz != null) {
    const userName = readlineSync.question('\nMay I have your name? ');
    console.log(`Hello, ${userName}!\n`);
    for (let i = 0; i < turnsCount; i += 1) {
      const response = getQuiz();
      console.log(`Question: ${response.question}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === response.answer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${response.answer}'.`);
        console.log(`Let's try again, ${userName}!`);
      }
    }

    console.log(`Congratulations, ${userName}!`);
  }
};

export default play;
