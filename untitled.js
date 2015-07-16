// branchCoordinatesX =[];
// branchCoordinatesY =[];


// // canvas drawing
// background = function(){
// colNum = parseInt($('.numOfColumn').val());
// colWidth = 700/(colNum);

//   canvas = document.getElementById("playScreen")
//   ctx = canvas.getContext('2d');
//   canvas.setAttribute('width', '800');
//   canvas.setAttribute('height', '600');


//   ctx.fillStyle = "#6495ED";
//   sky = new Path2D();
//   ctx.fillRect(0,0,800,200);

//   ctx.fillStyle = "#228b22";
//   grass = new Path2D();
//   ctx.fillRect(0,200,800,400);

//   cloud = new Path2D();
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   ctx.moveTo(45, 139);
//   ctx.quadraticCurveTo(61,97,89,110);  
//   ctx.quadraticCurveTo(105,58,127,110);
//   ctx.quadraticCurveTo(165,94,180,139);
//   ctx.closePath(); 
//   ctx.fillStyle = '#f8f8ff';
//   ctx.fill();
//   ctx.strokeStyle = '#f8f8ff';
//   ctx.stroke();

//   cloud2 = new Path2D();
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   ctx.moveTo(200, 115);
//   ctx.quadraticCurveTo(216,72,244,86);  
//   ctx.quadraticCurveTo(260,34,282,86);
//   ctx.quadraticCurveTo(320,70,335,115);
//   ctx.closePath(); 
//   ctx.fillStyle = '#f8f8ff';
//   ctx.fill();
//   ctx.strokeStyle = '#f8f8ff';
//   ctx.stroke();

//   cloud3 = new Path2D();
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   ctx.moveTo(360, 165);
//   ctx.quadraticCurveTo(376,122,404,136);  
//   ctx.quadraticCurveTo(420,84,432,136);
//   ctx.quadraticCurveTo(480,120,495,165);
//   ctx.closePath(); 
//   ctx.fillStyle = '#f8f8ff';
//   ctx.fill();
//   ctx.strokeStyle = '#f8f8ff';
//   ctx.stroke();

//   cloud4 = new Path2D();
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   ctx.moveTo(520, 100);
//   ctx.quadraticCurveTo(536,57,564,71);  
//   ctx.quadraticCurveTo(580,40,592,71);
//   ctx.quadraticCurveTo(640,55,670,100);
//   ctx.closePath(); 
//   ctx.fillStyle = '#f8f8ff';
//   ctx.fill();
//   ctx.strokeStyle = '#f8f8ff';
//   ctx.stroke();

// //maze
//   columns = new Path2D();
//     for(i=0; i<colNum; i++){
//       ctx.lineWidth = 14;
//       ctx.lineCap ='round';
//       ctx.beginPath();
//       ctx.moveTo(600/(colNum)+(i*colWidth), 240);
//       ctx.lineTo(600/(colNum)+(i*colWidth), 540);
//       ctx.strokeStyle = '#90ee90'
//       ctx.stroke();  
//     };

//   wayPoints = new Path2D();
//   for(k=0; k<colNum; k++){
//     for (j=0; j<game.frame.length; j++){
//     ctx.lineWidth = 5;
//     ctx.lineCap = 'round';
//     ctx.beginPath();
//     ctx.moveTo(600/(colNum)+(k*colWidth), 240+(j*(300/(game.frame.length-1))));
//     ctx.lineTo(600/(colNum)+(k*colWidth), 240.1+(j*(300/(game.frame.length-1))));
//     ctx.strokeStyle = '#d2691e';
//     ctx.stroke();
//     console.log(600/(colNum)+(k*colWidth), 240+(j*(300/(game.frame.length-1))))      
//     branchCoordinatesX.push(600/(colNum)+(k*colWidth));
//     branchCoordinatesY.push(240+(j*(300/(game.frame.length-1))));
//     }}

// };// end of canvas drawing (background fucntion())


// //draw branch

// getMousePos = function(e){
//     mx = e.clientX - playScreen.getBoundingClientRect().left; 
//     my = e.clientY - playScreen.getBoundingClientRect().top; 
//     console.log(mx, my)

// }


// $('#playScreen').click(function(e){
//   console.log("canvas clicked");
//   getMousePos(e);
//   for (i=0; i<branchCoordinatesX.length; i++){
//     for (j=0; j<branchCoordinatesY.length; j++){
//         if((mx == Math.round((branchCoordinatesX[i]/10)*10)) && (my == Math.round((branchCoordinatesY[j]/10)*10)) && (my !== branchCoordinatesX[branchCoordinatesX-1])){
//         branches();
//         } else {
//             console.log ("cannot set up branch")
//         }
//     }
//   }
//   });


//     branches = function(){
//     canvas = document.getElementById("playScreen")
//     ctx = canvas.getContext('2d');

//     branch = new Path2D();
//     ctx.lineWidth = 10;
//     ctx.lineCap = 'round';
//     ctx.beginPath();
//     ctx.moveTo(mx, my);
//     ctx.lineTo(mx+colWidth, my);
//     ctx.strokeStyle = '#8b4513';
//     ctx.stroke();
// }





  