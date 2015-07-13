var canvas;
var user1 = "user1";
var user2 = "user2";




$(document).ready(function() {
var isUserTurn1 = true;
var user1Play = [];
var user2Play = [];
var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  $('td').click(function () {
    if ($(this).hasClass('user1') || $(this).hasClass('user2')){
      return;
    }
    if (!isUserTurn1) {
        $(this).addClass('user1');
        isUserTurn1 = true;
        // store in user1 array
    } else {
        $(this).addClass('user2');
        isUserTurn1 = false;
        // store in user2 arrays
    }


    for (var i = 0; i < winningCombinations.length; i++) {
      var hasCompleteSet = true;
      var CurrentWinningCombination = winningCombinations[i];

      var userCells = $( ".user1" ).map(function() {
        return this.id;
      });

      for (var arr = 0; arr < CurrentWinningCombination.length; arr++) {
        var singleCell = CurrentWinningCombination[arr];

        var userHasCell = $.inArray(singleCell.toString(), userCells) ;
        if(userHasCell == -1) {
          hasCompleteSet = false
        }
      }

      if(hasCompleteSet){
        someoneWon("user 1");
      } else {

        hasCompleteSet = true;
        var userCells = $( ".user2" ).map(function() {
          return this.id;
        });

        for (var arr = 0; arr < CurrentWinningCombination.length; arr++) {
          var singleCell = CurrentWinningCombination[arr];

          var userHasCell = $.inArray(singleCell.toString(), userCells) ;
          if(userHasCell == -1) {
            hasCompleteSet = false
          }
        }

        if(hasCompleteSet){
          someoneWon("user 2");
        }
      }
    }
  });

 function someoneWon(Winner){
  console.log(Winner + " won")
 }



})