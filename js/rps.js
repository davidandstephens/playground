let compPick = Math.floor(Math.random() * 3) + 1;

const pickRock = () => {
  compPick = Math.floor(Math.random() * 3) + 1;
  if (compPick === 3) {
      document.getElementById('user').innerHTML = '<img src="../img/rock-win.png" class="fighter" alt="rock">';
      document.getElementById('comp').innerHTML = '<img src="../img/comp-sciss-loss.png" class="fighter" alt="scissors">';
      document.getElementById('result').innerHTML = 'Winner, Winner!!!';
  } else if (compPick === 1) {
      document.getElementById('user').innerHTML = '<img src="../img/rock-loss.png" class="fighter" alt="rock">';
      document.getElementById('comp').innerHTML = '<img src="../img/comp-rock-loss.png" class="fighter" alt="rock">';
      document.getElementById('result').innerHTML = 'No Contest';
  } else {
      document.getElementById('user').innerHTML = '<img src="../img/rock-loss.png" class="fighter" alt="rock">';
      document.getElementById('comp').innerHTML = '<img src="../img/comp-paper-win.png" class="fighter" alt="paper">';
      document.getElementById('result').innerHTML = 'You Lose...';
  }
};

const pickPaper = () => {
    compPick = Math.floor(Math.random() * 3) + 1;
    if (compPick === 1) {
        document.getElementById('user').innerHTML = '<img src="../img/paper-win.png" class="fighter" alt="paper">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-rock-loss.png" class="fighter" alt="rock">';
        document.getElementById('result').innerHTML = 'Winner, Winner!!!';
    } else if (compPick === 2) {
        document.getElementById('user').innerHTML = '<img src="../img/paper-loss.png" class="fighter" alt="paper">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-paper-loss.png" class="fighter" alt="paper">';
        document.getElementById('result').innerHTML = 'No Contest';
    } else {
        document.getElementById('user').innerHTML = '<img src="../img/paper-loss.png" class="fighter" alt="paper">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-sciss-win.png" class="fighter" alt="scissors">';
        document.getElementById('result').innerHTML = 'You Lose...';
    }
};

const pickScissors = () => {
    compPick = Math.floor(Math.random() * 3) + 1;
    if (compPick === 2) {
        document.getElementById('user').innerHTML = '<img src="../img/sciss-win.png" class="fighter" alt="scissors">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-paper-loss.png" class="fighter" alt="paper">';
        document.getElementById('result').innerHTML = 'Winner, Winner!!!';
    } else if (compPick === 3) {
        document.getElementById('user').innerHTML = '<img src="../img/sciss-loss.png" class="fighter" alt="scissors">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-sciss-loss.png" class="fighter" alt="scissors">';
        document.getElementById('result').innerHTML = 'No Contest';
    } else {
        document.getElementById('user').innerHTML = '<img src="../img/sciss-loss.png" class="fighter" alt="scissors">';
        document.getElementById('comp').innerHTML = '<img src="../img/comp-rock-win.png" class="fighter" alt="rock">';
        document.getElementById('result').innerHTML = 'You Lose...';
    }
};

document.getElementById('rock').addEventListener("click", pickRock, false);
document.getElementById('paper').addEventListener("click", pickPaper, false);
document.getElementById('scissors').addEventListener("click", pickScissors, false);
