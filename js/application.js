var Pig = function(){
  this.id  = 8;
  this.col = 0;
  this.row = 7;
}

var Monster = function() {
  this.id  = 9;
  this.col = 0;
  this.row = 0;
  this.trail = [];
}

var Branches = function() {
  this.id  = 1;
  this.all = [];
  this.test = [];
}

// set up (frame, pig, monster, branch)
var Game = function() {
  this.pig      = new Pig();
  this.monster  = new Monster();
  this.branches = new Branches();

  this.colNum = 5;
  this.rowNum = 8;
  this.frame = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]];
}

//--------------------------------------------------
// setElements
//--------------------------------------------------
Game.prototype.setPig = function(col) {
  this.pig.col = col;
};

Game.prototype.setMonster = function(col) {
  this.monster.col = col;
};

Game.prototype.setBranch = function(row, col) {
  if (row < this.frame.length) {
      this.frame[row][col]   = this.branch.id;
      this.frame[row][col+1] = this.branch.id;
  }
};

//--------------------------------------------------
// clearElements
//--------------------------------------------------
Game.prototype.clearPig = function() {
  this.pig.col = null;
};

Game.prototype.clearMonster = function() {
  this.monster.col = null;
};

Game.prototype.clearBranch = function(row, col) {
  if (row < this.frame.length  && col === 0) {
    this.frame[row][col]   = 0;
    this.frame[row][col+1] = 0;
  } else {
    this.frame[row][col+1] = 0;
  }
};

Game.prototype.clearScreen = function() {
  for(var row=0; row < frame.length; row++){
    for(var col=0; col < colNum; col++){
      this.frame[row][col] = 0;
    }
  }
};

//--------------------------------------------------
// checkRoutes (right, left, down)
//--------------------------------------------------
Game.prototype.checkRightSpot = function() {
  if (this.monster.col < this.colNum-1 &&
      this.frame[this.monster.row][this.monster.col+1] !== 0 &&
      this.frame[this.monster.row][this.monster.col+1] !== 9)
  {
    this.frame[this.monster.row][this.monster.col+1] = this.monster.id;
    this.monster.col++;
    return true;
  } else {
    return false;
  }
};

Game.prototype.checkLeftSpot = function() {
  if (this.monster.col - 1 >= 0 &&
      this.frame[this.monster.row][this.monster.col-1] !== 0 &&
      this.frame[this.monster.row][this.monster.col-1] !== 9)
  {
    this.frame[this.monster.row][this.monster.col-1] = this.monster.id;
    this.monster.col--;
    return true;
  } else {
    return false;
  }
};

Game.prototype.checkDownSpot = function() {
  if(this.monster.row < this.frame.length) {
    this.monster.row++;
    this.frame[this.monster.row][this.monster.col] = this.monster.id;
    return true;
  } else {
    return false;
  }
};

//--------------------------------------------------
// Movements
//--------------------------------------------------

Game.prototype.moveMonsterDown = function() {
  this.frame[0][this.monster.col] = this.monster.id;
  this.monster.trail.push(0, this.monster.col);
}

// TODO: review checking if monster should move right VS move right
Game.prototype.move = function() {
  if (this.checkRightSpot()) {
      this.checkRightSpot();
  } else if (this.checkLeftSpot()){
      this.checkLeftSpot();
  } else {
      this.checkDownSpot();
  }
  this.monster.trail.push(this.monster.row, this.monster.col);
};

// monster go and eat
Game.prototype.moveAuto = function() {
  if (this.monster.row < this.frame.length-1) {
    this.move();
    this.moveAuto();
  } else {
    this.testWinner()
  }
};

Game.prototype.testWinner = function() {
  if (this.monster.col === this.pig.col){
    console.log ("Bloody pig is gone");
    this.branches.test.push("true");
  } else {
    console.log ("Pig is still alive! Monster is dumb dumb");
    this.branches.test.push("false");
  }
};

var game    = new Game();
var timeLeft = 20;

//timer for Set up and respond
var countDown = setInterval(function(){
  if (--timeLeft <= 0){
    clearInterval(countDown)
  }
}, 1000);

//set branches in graphics
var chooseGroup = function() {
  switch (group) {
    case 'group1':  game.setBranch(0,0); break;
    case 'group2':  game.setBranch(1,0); break;
    case 'group3':  game.setBranch(2,0); break;
    case 'group4':  game.setBranch(3,0); break;
    case 'group5':  game.setBranch(4,0); break;
    case 'group6':  game.setBranch(5,0); break;
    case 'group7':  game.setBranch(6,0); break;
    case 'group8':  game.setBranch(7,0); break;
    case 'group9':  game.setBranch(0,1); break;
    case 'group10': game.setBranch(1,1); break;
    case 'group11': game.setBranch(2,1); break;
    case 'group12': game.setBranch(3,1); break;
    case 'group13': game.setBranch(4,1); break;
    case 'group14': game.setBranch(5,1); break;
    case 'group15': game.setBranch(6,1); break;
    case 'group16': game.setBranch(7,1); break;
    case 'group17': game.setBranch(0,2); break;
    case 'group18': game.setBranch(1,2); break;
    case 'group19': game.setBranch(2,2); break;
    case 'group20': game.setBranch(3,2); break;
    case 'group21': game.setBranch(4,2); break;
    case 'group22': game.setBranch(5,2); break;
    case 'group23': game.setBranch(6,2); break;
    case 'group24': game.setBranch(7,2); break;
    case 'group25': game.setBranch(0,3); break;
    case 'group26': game.setBranch(1,3); break;
    case 'group27': game.setBranch(2,3); break;
    case 'group28': game.setBranch(3,3); break;
    case 'group29': game.setBranch(4,3); break;
    case 'group30': game.setBranch(5,3); break;
    case 'group31': game.setBranch(6,3); break;
    case 'group32': game.setBranch(7,3); break;

    default:
        console.console.log('default');
  }
};

//erase branches
var clearGroup = function(){
  switch(group) {
    case 'group1':  game.clearBranch(0,0); break;
    case 'group2':  game.clearBranch(1,0); break;
    case 'group3':  game.clearBranch(2,0); break;
    case 'group4':  game.clearBranch(3,0); break;
    case 'group5':  game.clearBranch(4,0); break;
    case 'group6':  game.clearBranch(5,0); break;
    case 'group7':  game.clearBranch(6,0); break;
    case 'group8':  game.clearBranch(7,0); break;
    case 'group9':  game.clearBranch(0,1); break;
    case 'group10': game.clearBranch(1,1); break;
    case 'group11': game.clearBranch(2,1); break;
    case 'group12': game.clearBranch(3,1); break;
    case 'group13': game.clearBranch(4,1); break;
    case 'group14': game.clearBranch(5,1); break;
    case 'group15': game.clearBranch(6,1); break;
    case 'group16': game.clearBranch(7,1); break;
    case 'group17': game.clearBranch(0,2); break;
    case 'group18': game.clearBranch(1,2); break;
    case 'group19': game.clearBranch(2,2); break;
    case 'group20': game.clearBranch(3,2); break;
    case 'group21': game.clearBranch(4,2); break;
    case 'group22': game.clearBranch(5,2); break;
    case 'group23': game.clearBranch(6,2); break;
    case 'group24': game.clearBranch(7,2); break;
    case 'group25': game.clearBranch(0,3); break;
    case 'group26': game.clearBranch(1,3); break;
    case 'group27': game.clearBranch(2,3); break;
    case 'group28': game.clearBranch(3,3); break;
    case 'group29': game.clearBranch(4,3); break;
    case 'group30': game.clearBranch(5,3); break;
    case 'group31': game.clearBranch(6,3); break;
    case 'group32': game.clearBranch(7,3); break;
    default:
      console.console.log('default');
  }
};

var drawBranch = function() {
  $(this).css('stroke', 'rgba(139,69,19,1)');
  group = $(this).prop('id');
  chooseGroup(group);
  $(this).one("click", deleteBranch);
  $('.branchButton').hide();
  $('.readyButton').delay(5000).show();
};

var deleteBranch = function() {
  $(this).css('stroke', 'rgba(139,69,19,0)');
  group = $(this).prop('id');
  clearGroup(group);
  $(this).one("click", drawBranch);
};

var whichPig = function(pigId) {
  switch(pigId) {
    case 'pig0': game.setPig(0); break;
    case 'pig1': game.setPig(1); break;
    case 'pig2': game.setPig(2); break;
    case 'pig3': game.setPig(3); break;
    case 'pig4': game.setPig(4); break;
    default:
      console.log('default');
  }
};

var drawPig = function() {
  $(this).css('fill', 'rgba(34,139,34,0)')
  whichPig($(this).prop('id'));
  $(this).one("click", deletePig);
  $('.piggyButton').hide();
  $('.branchButton').show();
};

var deletePig = function() {
  $(this).css('fill', 'rgba(34,139,34,1)')
  group = $(this).prop('id');
  game.clearPig();
  $(this).one("click", drawPig)
  $('.piggyButton').show();
};

var graphTrail = function() {
  var graphCoordArrayX  = [];
  var graphCoordArrayY  = [];
  var graphCoordArrayXY = [];

  for (var i=0; i < game.monster.trail.length; i+=2){
    graphCoordArrayX.push( [240 + (game.monster.trail[i]*45)] )
  }

  for (var j=1; j < game.monster.trail.length; j+=2){
    graphCoordArrayY.push([200+(game.monster.trail[j]*120)])
  }

  for (var k=0; k < graphCoordArrayX.length; k++) {
    graphCoordArrayXY.push( [graphCoordArrayY[k] - 290, graphCoordArrayX[k] - 195] )
  }

  return "M" + graphCoordArrayXY.join(" ");
};

//set the Monster
var whichMonster = function(monster) {
  switch(monster) {
    case 'monster0': game.setMonster(0); break;
    case 'monster1': game.setMonster(1); break;
    case 'monster2': game.setMonster(2); break;
    case 'monster3': game.setMonster(3); break;
    case 'monster4': game.setMonster(4); break;
    default:
        console.console.log('default');
    }
};

var drawMonster = function() {
  $(this).css('fill', 'rgba(100,149,237,0)');
  monster = $(this).prop('id');
  whichMonster(monster);

  $('#'+monster).prev().children().attr("path", graphTrail());
  $(this).one("click", deleteMonster);
  $('.readyMonsterButton').hide();
  $('.monsterButton').show();
};

var deleteMonster = function() {
  $(this).css('fill', 'rgba(100,149,237,1)');
  group = $(this).prop('id');
  game.clearMonster();
  $(this).one("click", drawMonster);
  $('.monsterButton').show();
};

var testRun = function(){
  // for (i=0; i<colNum; i++){
    game.setMonster(0);
    game.moveMonsterDown();
    game.moveAuto();
    if (game.branch.test.some(function(x){ return x === true })) {
      console.log("Go ahead!");
    } else{
      console.log("Try not to build a castle.")
    }
  // }
};

$(document).ready(function() {

  $(".indiBranch").one("click", drawBranch);
  $('.branchButton').hide();
  $(".pigCover").one("click", drawPig);
  $('.readyButton').hide();
  $('.readyButton').click(function() {
      $('.readyButton').hide();
      $('.readyMonsterButton').show();
  })
  $(".monsterCover").one("click", drawMonster);
  $('.monsterButton').hide();
  $('.readyMonsterButton').hide();

  // monster trail algorithm
  $(".monsterButton").click(function() {
    console.log("unleash");
    game.moveMonsterDown();
    game.moveAuto();
    graphTrail();
  });

});
