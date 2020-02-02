import readlineSync from 'readline-sync';

const readUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const printQuestion = (query) => console.log(`Question: ${query}`);

const getAnswer = () => readlineSync.question('Your answer: ');

export {
  readUserName, getRandomInt, printQuestion, getAnswer,
};
