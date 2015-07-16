var canvas;
var user1 = "user1";
var user2 = "user2";

$(document).ready(function() {

  var isUserTurn1 = true;
  var user1Play = [];
  var user2Play = [];
  var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  var turn = 'user1'

  var switchTurns = function () {
    if (turn == "user1") {
      turn = "user2"
    } else {
      turn = "user1"
    }
  }

  var someoneWon = function(){
    $('td').off("click");
    window.alert(turn + " won");
  }


  var checkWin = function() {
    var userCells = $( "."+turn ).map(function() { return this.id; });
    for (var i = 0; i < winningCombinations.length; i++) {
      var hasCompleteSet = true;
      var CurrentWinningCombination = winningCombinations[i];
      // Code to Check User #1 winning?
      for (var arr = 0; arr < CurrentWinningCombination.length; arr++) {
        var singleCell = CurrentWinningCombination[arr];
        var userHasCell = $.inArray(singleCell.toString(), userCells) ;
        if(userHasCell == -1) {
          hasCompleteSet = false
        }
      }

      if (hasCompleteSet === true){
        someoneWon();
        return
      }

    }
  }

  $('td').on('click', function () {
    // if ($(this).hasClass('user1') || $(this).hasClass('user2')){
    //   return;
    // }

    $(this).addClass(turn)
    $(this).off('click')

    checkWin()

    // Switch turns
    switchTurns()


  });

})