$(document).ready(function() {

// start button - when game button is selected,
// the fa "play" icon inside the button changes to a "reload" icon
// and button id will change, which should
// trigger resetGame function to reset game when clicked.

// global variables
var playerX = [],
    playerO = [],
    winner = null, // there is no winner b/c the game has not started
    currentPlayer = 'O',
    tiles = $('.tile'),
    icon = $('#game-btn i'),
    xWinScore = $('#scoreboard-tile-x'),
    oWinScore = $('#scoreboard-tile-o'),
    tieWinScore = $('#scoreboard-tile-tie'),
    scoreboard = $('#scoreboard');
    scoreboardText = $('#scoreboard-text');
    winsX = 0,
    winsO = 0,
    winsTie = 0,
    tie = 0,
    whoWins = $('#messages'),
    winningCombos = [
        ['1', '2', '3'] , ['4', '5', '6'] , ['7', '8', '9'],
        ['1', '4', '7'] , ['2', '5', '8'] , ['3', '6', '9'],
        ['1', '5', '9'] , ['3', '5', '7']
     ];

 whoWins.html("Press play to begin.");
 scoreboardText.hide();
 scoreboard.hide();

 // modal click events

  $('#instruction-box').on('click', function() {
    $('#overlay, #modal').show();
  });

  $('#close, #overlay').on('click', function() {
    $('#overlay, #modal').hide();
  });

 // begin click event

 $('#game-btn').click(function(e) {
   if (icon.hasClass('fa-play')) {
     initPlay();
   } else {
     resetGame();
   }

   initGame();
  });

  // start game function
  function initPlay() {
    icon.removeClass('fa-play').addClass('fa-rotate-right');
    tiles.addClass('playing');
    tiles.addClass('open');
    winner = null; // resets the game
  };

  // reset game tiles
  function resetGame() {
    icon.removeClass('fa-rotate-right').addClass('fa-play');
    tiles.removeClass('open');
    tiles.removeClass('player-x player-o');
    tiles.html('');
    playerX = [];
    playerO = [];
    whoWins.hide();
    tiles.removeClass('playing');
  };

  // initialize gameboard
  function initGame() {
    whoWins.hide();
    scoreboardText.show();
    scoreboard.show();
    tiles.on('click', function() { // iterate through all tiles
      if ($(this).hasClass('playing')) {
        playGame($(this)); // important callback - creates jQuery object so that methods in playGame work
      }
    });
  };

  // play game: switches between X and O and checks for win with every click

  function playGame(tile) {
    tile.removeClass('open');
    if (tile.html() === "") { // if tile is empty, has not already been clicked
      var id = tile.attr('id');
      if (currentPlayer === 'O') { // and O clicks a tile
        // show tile was selected by playerO
        tile.removeClass('player-x');
        tile.addClass('player-o');
        tile.html('O');
        // add tile to playerO array
        playerO.push(id);
        checkForWins(playerO);
        currentPlayer = 'X';  // then switch turn
      } else if (currentPlayer === 'X') {
        tile.addClass('player-x');
        tile.removeClass('player-o');
        tile.html('X');
        playerX.push(id);
        checkForWins(playerX);
        currentPlayer = 'O'; // switches again
      }
    }
  };

  function checkForWins(tile) {
    for (var i=0; i < winningCombos.length; i++) {
      var currentWin = winningCombos[i];

      if (playerX.indexOf(currentWin[0]) != -1 && playerX.indexOf(currentWin[1]) != -1 & playerX.indexOf(currentWin[2]) != -1) { // loops through winning combos and returns -1 if none are found
        winner = 'X';
        winsX += 1;
        whoWins.show();
        whoWins.html('Player X wins! Reset to play again.');
        xWinScore.html(winsX); // incrementally increase as player wins more games
      } else if (playerO.indexOf(currentWin[0]) != -1 && playerO.indexOf(currentWin[1]) != -1 && playerO.indexOf(currentWin[2]) != -1) {
        winner = 'O';
        winsO += 1;
        whoWins.show();
        whoWins.html('You win, Player O! Reset to play again.');
        oWinScore.html(winsO);
      } else if (playerX.length + playerO.length == 9) {
        winner = 'tie';
        winsTie += 1;
        whoWins.show();
        whoWins.html('Tie game! Reset to play again.');
        tieWinScore.html(winsTie);
      }
      if (winner) {
        playerX = []; // empty the array for next game
        playerO = [];
        tiles.off('click'); // disable click on tiles
        return; // immediately stop the loop
      }
    }
  };
});
