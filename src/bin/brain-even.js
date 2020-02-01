#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetings, getUserName } from '..';

const MAX = 20;
const YES = 'yes';
const NO = 'no';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const checkAnswer = (answer, number, score, userName) => {
  const isEven = number % 2 === 0;
  const correct = isEven ? YES : NO;
  if (answer === correct) {
    console.log('Correct!');
    return score + 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`);
  return score;
};

const even = () => {
  console.log('Welcome to Answer "yes" if number even otherwise answer "no".\n');
  const userName = getUserName();
  let correct = 0;
  while (correct < 3) {
    const number = getRandomInt(MAX);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    correct = checkAnswer(answer, number, correct, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

greetings();
even();
