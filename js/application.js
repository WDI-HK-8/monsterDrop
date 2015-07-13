// set up (frame, pig, monster, branch)

var monster ;
var pig;
var frame =[];

var game = { 
    monster: 9,
    pig: 8,
    frame:[ [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]],
};


var colNum =5
var rowNum;

var monsterCol=0
var monsterRow=0;

var pigCol;
var pigRow = frame.length-1;

var branch = 1
var branchPos =[];

var timeLeft = 20;


DEBUG = true;

var log = function(msg){
    if (DEBUG) {
        console.log(msg);
    }
};




$(document).ready(function(){



// where player put the pig (must be last row)
setPig = function(col){
    pigCol = col;
    log("pig position" + pigCol);
    
};

// where player put the monster (must be first row)
setMonster = function(col){
    monsterCol = col;
    log("monster position" + monsterCol);
    
}; 

// set branch head (head --> end)
setBranch = function(row, col){
    if((row<game.frame.length)){
        game.frame[row][col] = branch;
        game.frame[row][col+1] = branch;
    }
    branchPos = [row,col]; 
};

//clear position and clear screen
clearPosition = function(row, col){
    if(row<frame.length-1){
    frame[row][col] = 0;
    }
};

clearScreen = function(row, col){
    for(row=0; row < frame.length; row++){
        for(col =0; col < colNum; col++){
            frame[row][col] = 0;
        }
    }
};

//timer for Set up and respond
minusSecond = function(){
  timeLeft --;
  return timeLeft;
};

var countDown = setInterval(function(){
    minusSecond();
    if(timeLeft <= 0){clearInterval(countDown)}
},1000)

//test set up
var test = function(){
    setMonster(3);
    setBranch(1,2);
    setBranch(1,3);
    setBranch(3,2);
    setBranch(3,3);
    setBranch(6,2);
    setBranch(6,3);
    setPig(2);
    log(game.frame);
};

// movement
var checkRightSpot = function(){
    if((monsterCol<colNum-1)&&(game.frame[monsterRow][monsterCol+1] !== 0)&&(game.frame[monsterRow][monsterCol+1] !== 9)){
    game.frame[monsterRow][monsterCol+1] = monster;
    monsterCol++;
    log(game.frame);
    log('right');
    return true
} 
 return false   
};

var checkLeftSpot = function(){
    if((monsterCol-1>=0)&&(game.frame[monsterRow][monsterCol-1] !== 0)&&(game.frame[monsterRow][monsterCol-1] !== 9)){
    game.frame[monsterRow][monsterCol-1] = monster;
    monsterCol--;
    log(game.frame)
    log('left')
    return true;
} 
    return false;
};
    
var checkDownSpot = function(){
    if(monsterRow<game.frame.length){
    monsterRow++;
    game.frame[monsterRow][monsterCol] = monster;
    log(game.frame)
    log('down')
    return true
} 
    return false
}   ; 

var move = function(){
        if(checkRightSpot() === true){
            checkRightSpot();
        } else if (checkLeftSpot() === true){
            checkLeftSpot();
        } else {
            checkDownSpot();
        }
};




})//end of jQuery