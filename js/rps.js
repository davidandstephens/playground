let compPick = Math.floor(Math.random() * 3) + 1;

const pickRock = () => {
  let newRow = document.createElement('tr');
  compPick = Math.floor(Math.random() * 3) + 1;
  if (compPick === 3) {
      newRow.innerHTML = '<td>Rock</td><td>Scissors</td><td>Player Wins</td>';
      document.getElementById('user').innerHTML = '<img src="../img/rock-win.png" class="fighter" alt="rock">';
      document.getElementById('comp').innerHTML = '<img src="../img/comp-sciss-loss.png" class="fighter" alt="scissors">';
      document.getElementById('result').innerHTML = 'Winner, Winner!!!';
  } else if (compPick === 1) {
      newRow.innerHTML = '<td>Rock</td><td>Rock</td><td>Draw Game</td>';
      document.getElementById('user').innerHTML = '<img src="../img/rock-loss.png" class="fighter" alt="rock">';
      document.getElementById('comp').innerHTML = '<img src="../img/comp-rock-loss.png" class="fighter" alt="rock">';
      document.getElementById('result').innerHTML = 'No Contest';
  } else {
      newRow.innerHTML = '<td>Rock</td><td>Paper</td><td>Computer Wins</td>';
      document.getElementById('user').innerHTML = '<img src="../img/rock-loss.png" class="fighter" alt="rock">';
      document.getElementById('comp').innerHTML = '<img src="../img/comp-paper-win.png" class="fighter" alt="paper">';
      document.getElementById('result').innerHTML = 'You Lose...';
  }
  document.getElementById('past-results').append(newRow);
};

const pickPaper = () => {
    let newRow = document.createElement('tr');
    compPick = Math.floor(Math.random() * 3) + 1;
    if (compPick === 1) {
        newRow.innerHTML = '<td>Paper</td><td>Rock</td><td>Player Wins</td>';
        document.getElementById('user').innerHTML = '<img src="../img/paper-win.png" class="fighter" alt="paper">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-rock-loss.png" class="fighter" alt="rock">';
        document.getElementById('result').innerHTML = 'Winner, Winner!!!';
    } else if (compPick === 2) {
        newRow.innerHTML = '<td>Paper</td><td>Paper</td><td>Draw Game</td>';
        document.getElementById('user').innerHTML = '<img src="../img/paper-loss.png" class="fighter" alt="paper">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-paper-loss.png" class="fighter" alt="paper">';
        document.getElementById('result').innerHTML = 'No Contest';
    } else {
        newRow.innerHTML = '<td>Paper</td><td>Scissors</td><td>Computer Wins</td>';
        document.getElementById('user').innerHTML = '<img src="../img/paper-loss.png" class="fighter" alt="paper">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-sciss-win.png" class="fighter" alt="scissors">';
        document.getElementById('result').innerHTML = 'You Lose...';
    }
    document.getElementById('past-results').append(newRow);
};

const pickScissors = () => {
    let newRow = document.createElement('tr');
    compPick = Math.floor(Math.random() * 3) + 1;
    if (compPick === 2) {
        newRow.innerHTML = '<td>Scissors</td><td>Paper</td><td>Player Wins</td>';
        document.getElementById('user').innerHTML = '<img src="../img/sciss-win.png" class="fighter" alt="scissors">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-paper-loss.png" class="fighter" alt="paper">';
        document.getElementById('result').innerHTML = 'Winner, Winner!!!';
    } else if (compPick === 3) {
        newRow.innerHTML = '<td>Scissors</td><td>Rock</td><td>Draw Game</td>';
        document.getElementById('user').innerHTML = '<img src="../img/sciss-loss.png" class="fighter" alt="scissors">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-sciss-loss.png" class="fighter" alt="scissors">';
        document.getElementById('result').innerHTML = 'No Contest';
    } else {
        newRow.innerHTML = '<td>Scissors</td><td>Rock</td><td>Computer Wins</td>';
        document.getElementById('user').innerHTML = '<img src="../img/sciss-loss.png" class="fighter" alt="scissors">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-rock-win.png" class="fighter" alt="rock">';
        document.getElementById('result').innerHTML = 'You Lose...';
    }
    document.getElementById('past-results').append(newRow);
};

document.getElementById('rock').addEventListener("click", pickRock, false);
document.getElementById('paper').addEventListener("click", pickPaper, false);
document.getElementById('scissors').addEventListener("click", pickScissors, false);
