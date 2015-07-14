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

//clear position and clear screen
var clearPosition = function(row, col){
    if(row<frame.length-1){
    frame[row][col] = 0;
    }
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

var winner = function(){
    if(monsterCol === pigCol){
        console.log ("Bloody pig is gone");
    } else {
        console.log ("Pig is still alive! Monster is dumb dumb")
    }
    
}



$(document).ready(function(){

branchCoordinatesX =[];
branchCoordinatesY =[];

//draw background
$('.go').click(function(){
  console.log("go button clicked")
  background();

})

// canvas drawing
background = function(){
colNum = parseInt($('.numOfColumn').val());
colWidth = 700/(colNum);

  canvas = document.getElementById("playScreen")
  ctx = canvas.getContext('2d');
  canvas.setAttribute('width', '800');
  canvas.setAttribute('height', '600');


  ctx.fillStyle = "#6495ED";
  sky = new Path2D();
  ctx.fillRect(0,0,800,200);

  ctx.fillStyle = "#228b22";
  grass = new Path2D();
  ctx.fillRect(0,200,800,400);

  cloud = new Path2D();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(45, 139);
  ctx.quadraticCurveTo(61,97,89,110);  
  ctx.quadraticCurveTo(105,58,127,110);
  ctx.quadraticCurveTo(165,94,180,139);
  ctx.closePath(); 
  ctx.fillStyle = '#f8f8ff';
  ctx.fill();
  ctx.strokeStyle = '#f8f8ff';
  ctx.stroke();

  cloud2 = new Path2D();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(200, 115);
  ctx.quadraticCurveTo(216,72,244,86);  
  ctx.quadraticCurveTo(260,34,282,86);
  ctx.quadraticCurveTo(320,70,335,115);
  ctx.closePath(); 
  ctx.fillStyle = '#f8f8ff';
  ctx.fill();
  ctx.strokeStyle = '#f8f8ff';
  ctx.stroke();

  cloud3 = new Path2D();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(360, 165);
  ctx.quadraticCurveTo(376,122,404,136);  
  ctx.quadraticCurveTo(420,84,432,136);
  ctx.quadraticCurveTo(480,120,495,165);
  ctx.closePath(); 
  ctx.fillStyle = '#f8f8ff';
  ctx.fill();
  ctx.strokeStyle = '#f8f8ff';
  ctx.stroke();

  cloud4 = new Path2D();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(520, 100);
  ctx.quadraticCurveTo(536,57,564,71);  
  ctx.quadraticCurveTo(580,40,592,71);
  ctx.quadraticCurveTo(640,55,670,100);
  ctx.closePath(); 
  ctx.fillStyle = '#f8f8ff';
  ctx.fill();
  ctx.strokeStyle = '#f8f8ff';
  ctx.stroke();

//maze
  columns = new Path2D();
    for(i=0; i<colNum; i++){
      ctx.lineWidth = 14;
      ctx.lineCap ='round';
      ctx.beginPath();
      ctx.moveTo(600/(colNum)+(i*colWidth), 240);
      ctx.lineTo(600/(colNum)+(i*colWidth), 540);
      ctx.strokeStyle = '#90ee90'
      ctx.stroke();  
    };

  wayPoints = new Path2D();
  for(k=0; k<colNum; k++){
    for (j=0; j<game.frame.length; j++){
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(600/(colNum)+(k*colWidth), 240+(j*(300/(game.frame.length-1))));
    ctx.lineTo(600/(colNum)+(k*colWidth), 240.1+(j*(300/(game.frame.length-1))));
    ctx.strokeStyle = '#d2691e';
    ctx.stroke();
    console.log(600/(colNum)+(k*colWidth), 240+(j*(300/(game.frame.length-1))))      
    branchCoordinatesX.push(600/(colNum)+(k*colWidth));
    branchCoordinatesY.push(240+(j*(300/(game.frame.length-1))));
    }}

};// end of canvas drawing (background fucntion())


//draw branch

getMousePos = function(e){
    mx = e.clientX - playScreen.getBoundingClientRect().left; 
    my = e.clientY - playScreen.getBoundingClientRect().top; 
    console.log(mx, my)

}


$('#playScreen').click(function(e){
  console.log("canvas clicked");
  getMousePos(e);
  for (i=0; i<branchCoordinatesX.length; i++){
    for (j=0; j<branchCoordinatesY.length; j++){
        if((mx == Math.round((branchCoordinatesX[i]/10)*10)) && (my == Math.round((branchCoordinatesY[j]/10)*10)) && (my !== branchCoordinatesX[branchCoordinatesX-1])){
        branches();
        } else {
            console.log ("cannot set up branch")
        }
    }
  }
  });


    branches = function(){
    canvas = document.getElementById("playScreen")
    ctx = canvas.getContext('2d');

    branch = new Path2D();
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(mx+colWidth, my);
    ctx.strokeStyle = '#8b4513';
    ctx.stroke();
}





  







})//end of jQuery