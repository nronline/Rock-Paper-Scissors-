const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ){
    return userInput;
  }
  else{
    console.log('Error!')
  }
}

//console.log(getUserChoice('Rock'));

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
  }

  }

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'hadouken'){
     return 'Kaboom You win!';
  }
  else if(userChoice === computerChoice){
     return 'Its a tie!';
  }
  else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
       return 'You lose!';
    }
    else{
       return 'You Win!';
    }
  }
  else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
       return 'You lose!';
    }
    else{
       return 'You Win!';
    }
  }
  else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
       return 'You lose!';
    }
    else{
       return 'You Win!';
    }
  }
}

console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

const playGame = () => {
  const userChoice = getUserChoice('hadouken');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
