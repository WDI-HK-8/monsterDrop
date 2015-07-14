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

var Mouse ={
    x: 0,
    y: 0,
}


DEBUG = true;

var log = function(msg){
    if (DEBUG) {
        console.log(msg);
    }
};

// where player put the pig (must be last row)
var setPig = function(col){
    pigCol = col;
    log("pig position" + pigCol);
    
};

// where player put the monster (must be first row)
var setMonster = function(col){
    monsterCol = col;
    log("monster position" + monsterCol);
    
}; 

// set branch head (head --> end)
var setBranch = function(row, col){
    if((row<game.frame.length)){
        game.frame[row][col] = branch;
        game.frame[row][col+1] = branch;
    }
    branchPos = [row,col]; 
};

var clearBranch = function(row, col){
    if((row<game.frame.length) && (col === 0)){
        game.frame[row][col] = 0;
        game.frame[row][col+1] = 0;
    } else{
        game.frame[row][col+1] = 0;
    }
};

//clear position and clear screen
var clearPig = function(){
    pigCol = null;
    
};

var clearMonster = function(){
    monsterCol = null;
    
};

var clearScreen = function(row, col){
    for(row=0; row < frame.length; row++){
        for(col =0; col < colNum; col++){
            frame[row][col] = 0;
        }
    }
};

//timer for Set up and respond
var minusSecond = function(){
  timeLeft --;
  return timeLeft;
};

var countDown = setInterval(function(){
    minusSecond();
    if(timeLeft <= 0){clearInterval(countDown)}
},1000)


// movement
var checkRightSpot = function(){
    if((monsterCol<colNum-1)&&(game.frame[monsterRow][monsterCol+1] !== 0)&&(game.frame[monsterRow][monsterCol+1] !== 9)){
    game.frame[monsterRow][monsterCol+1] = game.monster;
    monsterCol++;
    log(game.frame);
    log('right');
    return true
} 
 return false   
};

var checkLeftSpot = function(){
    if((monsterCol-1>=0)&&(game.frame[monsterRow][monsterCol-1] !== 0)&&(game.frame[monsterRow][monsterCol-1] !== 9)){
    game.frame[monsterRow][monsterCol-1] = game.monster;
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
    game.frame[monsterRow][monsterCol] = game.monster;
    log(game.frame)
    log('down')
    return true
} 
    return false
}   ; 

var initMove = function(){
    game.frame[0][monsterCol] = game.monster
}

var move = function(){
        if(checkRightSpot() === true){
            checkRightSpot();
        } else if (checkLeftSpot() === true){
            checkLeftSpot();
        } else {
            checkDownSpot();
        }
};

var winner = function(){
    if(monsterCol === pigCol){
        console.log ("Bloody pig is gone");
    } else {
        console.log ("Pig is still alive! Monster is dumb dumb")
    }
    
}

$(document).ready(function(){

//set branches in graphics
chooseGroup = function(){
        switch(group) {
        case 'group1':
            setBranch(0,0)
            break;
        case 'group2':
            setBranch(1,0)
            break;
        case 'group3':
            setBranch(2,0)
            break;
        case 'group4':
            setBranch(3,0)
            break;
        case 'group5':
            setBranch(4,0)
            break;
        case 'group6':
            setBranch(5,0)
            break;
        case 'group7':
            setBranch(6,0)
            break;
        case 'group8':
            setBranch(7,0)
            break;

        case 'group9':
            setBranch(0,1)
            break;
        case 'group10':
            setBranch(1,1)
            break;
        case 'group11':
            setBranch(2,1)
            break;
        case 'group12':
            setBranch(3,1)
            break;
        case 'group13':
            setBranch(4,1)
            break;
        case 'group14':
            setBranch(5,1)
            break;
        case 'group15':
            setBranch(6,1)
            break;
        case 'group16':
            setBranch(7,1)
            break;

        case 'group17':
        setBranch(0,2)
            break;
        case 'group18':
        setBranch(1,2)
            break;
        case 'group19':
        setBranch(2,2)
            break;
        case 'group20':
        setBranch(3,2)
            break;
        case 'group21':
        setBranch(4,2)
            break;
        case 'group22':
        setBranch(5,2)
            break;
        case 'group23':
        setBranch(6,2)
            break;
        case 'group24':
        setBranch(7,2)
            break;

        case 'group25':
        setBranch(0,3)
            break;
        case 'group26':
        setBranch(1,3)
            break;
        case 'group27':
        setBranch(2,3)
            break;
        case 'group28':
        setBranch(3,3)
            break;
        case 'group29':
        setBranch(4,3)
            break;
        case 'group30':
        setBranch(5,3)
            break;
        case 'group31':
        setBranch(6,3)
            break;
        case 'group32':
        setBranch(7,3)
            break;
        default:
            console.log('default');
        }
};

   
//erase branches
clearGroup = function(){
        switch(group) {
        case 'group1':
            clearBranch(0,0)
            break;
        case 'group2':
            clearBranch(1,0)
            break;
        case 'group3':
            clearBranch(2,0)
            break;
        case 'group4':
            clearBranch(3,0)
            break;
        case 'group5':
            clearBranch(4,0)
            break;
        case 'group6':
            clearBranch(5,0)
            break;
        case 'group7':
            clearBranch(6,0)
            break;
        case 'group8':
            clearBranch(7,0)
            break;

        case 'group9':
            clearBranch(0,1)
            break;
        case 'group10':
            clearBranch(1,1)
            break;
        case 'group11':
            clearBranch(2,1)
            break;
        case 'group12':
            clearBranch(3,1)
            break;
        case 'group13':
            clearBranch(4,1)
            break;
        case 'group14':
            clearBranch(5,1)
            break;
        case 'group15':
            clearBranch(6,1)
            break;
        case 'group16':
            clearBranch(7,1)
            break;

        case 'group17':
        clearBranch(0,2)
            break;
        case 'group18':
        clearBranch(1,2)
            break;
        case 'group19':
        clearBranch(2,2)
            break;
        case 'group20':
        clearBranch(3,2)
            break;
        case 'group21':
        clearBranch(4,2)
            break;
        case 'group22':
        clearBranch(5,2)
            break;
        case 'group23':
        clearBranch(6,2)
            break;
        case 'group24':
        clearBranch(7,2)
            break;

        case 'group25':
        clearBranch(0,3)
            break;
        case 'group26':
        clearBranch(1,3)
            break;
        case 'group27':
        clearBranch(2,3)
            break;
        case 'group28':
        clearBranch(3,3)
            break;
        case 'group29':
        clearBranch(4,3)
            break;
        case 'group30':
        clearBranch(5,3)
            break;
        case 'group31':
        clearBranch(6,3)
            break;
        case 'group32':
        clearBranch(7,3)
            break;
        default:
            console.log('default');
        }
};


drawBranch = function(){
    console.log("drawBranch");
    $(this).css('stroke', 'rgba(139,69,19,1)')
    console.log($(this).prop('id'))
    group = $(this).prop('id');
    chooseGroup(group);
    $(this).one("click", deleteBranch)
};

deleteBranch = function(){
    console.log("deleteBranch");
    $(this).css('stroke', 'rgba(139,69,19,0)')
    console.log($(this).prop('id'))
    group = $(this).prop('id');
    clearGroup(group);
    $(this).one("click", drawBranch)
};

$(".indiBranch").one("click", drawBranch);
 

//set the Pig
whichPig = function(){
        switch(piggy) {
        case 'pig0':
            setPig(0)
            break;
        case 'pig1':
            setPig(1)
            break;
        case 'pig2':
            setPig(2)
            break;
        case 'pig3':
            setPig(3)
            break;
        case 'pig4':
            setPig(4)
            break;
        default:
            console.log('default');
        }
};

drawPig = function(){
    console.log("drawPig");
    $(this).css('fill', 'rgba(34,139,34,0)')
    console.log($(this).prop('id'))
    piggy = $(this).prop('id');
    whichPig(piggy);
    $(this).one("click", deletePig)
};

//erase pig position
deletePig = function(){
    console.log("deletePig");
    $(this).css('fill', 'rgba(34,139,34,1)')
    console.log($(this).prop('id'))
    group = $(this).prop('id');
    clearPig();
    $(this).one("click", drawPig)
};

$(".pigCover").one("click", drawPig)


//set the Monster
whichMonster = function(){
        switch(monster) {
        case 'monster0':
            setMonster(0)
            break;
        case 'monster1':
            setMonster(1)
            break;
        case 'monster2':
            setMonster(2)
            break;
        case 'monster3':
            setMonster(3)
            break;
        case 'monster4':
            setMonster(4)
            break;
        default:
            console.log('default');
        }
};

drawMonster = function(){
    log("drawMonster");
    $(this).css('fill', 'rgba(100,149,237,0)')
    log($(this).prop('id'))
    monster = $(this).prop('id');
    whichMonster(monster);
    $(this).one("click", deleteMonster)
};


//erase monster position
deleteMonster = function(){
    log("deleteMonster");
    $(this).css('fill', 'rgba(100,149,237,1)')
    log($(this).prop('id'))
    group = $(this).prop('id');
    clearMonster();
    $(this).one("click", drawMonster)
};

$(".monsterCover").one("click", drawMonster)
//end of monster drawing/delete

// monster go and eat
$(".monsterButton").click(function(){
  

})




});
//end of jQuery

