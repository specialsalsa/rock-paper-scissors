const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return 'rock';

    case 2:
      return 'paper';

    case 3:
      return 'scissors';
  }
};

const throws = {
  rock: {
    beats: 'scissors'
  },
  paper: {
    beats: 'rock'
  },
  scissors: {
    beats: 'paper'
  }
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = prompt('Choose your throw:').toLowerCase();
  computerSelection = computerPlay();
  let winner = '';

  if (!throws[playerSelection]) {
    alert('Invalid throw selected');
    return;
  }
  if (playerSelection === computerSelection) {
    winner = 'tie';
  } else {
    if (throws[playerSelection].beats === computerSelection) {
      return 'player';
    } else {
      return 'computer';
    }
  }
};

const game = () => {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    let winner = playRound();
    if (winner === 'player') playerWins++;
    else if (winner === 'computer') computerWins++;
  }

  if (playerWins > computerWins) return 'Player wins!';
  else if (playerWins < computerWins) return 'Computer wins!';
  else return 'Tie!';
};
