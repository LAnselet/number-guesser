let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('The number is out of range.');
  }
  if (userGuess == computerGuess) {
    return false;
  }
  else if (getAbsoluteDistnce(userGuess, secretTargetNumber) > getAbsoluteDistnce(computerGuess, secretTargetNumber)) {
    return false;
  }
  else {
    return true;
  }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  }
  else if (winner === 'computer') {
    computerScore += 1;
  }
  else {
    alert('Unknown player!');
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};

// takes two numbers and returns the distance,
const getAbsoluteDistnce = (guess, targetGuess) => {
  return Math.abs(guess - targetGuess);
};