let inputDir = { x: 0, y: 0 };
let snakeArr = [{ x: 13, y: 15 }];
let lastPaintTime = 0
let speed = 8
let food = { x: 6, y: 7 }
let index=0
let ind1=0
let dir='../img/db';
let obj=document.getElementsByClassName('head')
let goku=new Array()
goku[0]='url(./img/goku/goku.jfif)'
goku[1]='url(./img/goku/goku1.png)'
goku[2]='url(./img/goku/goku2.jpg)'
goku[3]='url(./img/goku/goku3.png)'
goku[4]='url(./img/goku/goku4.png)'
goku[5]='url(./img/goku/goku5.jpg)'
goku[6]='url(./img/goku/goku6.jfif)'
//Game Functions
function main(ctime) {
  window.requestAnimationFrame(main);
  // console.log(ctime)
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine()
}

function isCollide(arr){
  //if you bump into yourself
  for(let i=1;i<snakeArr.length;i++){
    if(arr[i].x === arr[0].x && arr[i].y === arr[0].y){speed=8;index=0;
      return true
    }}
    //if you bump into the wall
    if(arr[0].x >=18||arr[0].x <=0 || arr[0].y >=18||arr[0].y <=0){speed=8;index=0;
      return true
    }
}

function gameEngine() {
  //Updating the snake arr and food

  if(isCollide(snakeArr)){
    inputDir={x:0,y:0};
    alert("game over press any key")
    ind1=0;
    snakeArr=[{x:10,y:10}];
    score=0;
    speed=8;
    index=0;
  }
  //if you have eaten the food

  if(snakeArr[0].y===food.y && snakeArr[0].x==food.x){
    let a=2;
    let b=16;
    snakeArr.unshift({x:snakeArr[0].x=food.x,y:snakeArr[0].y=food.y})
    food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    index++
  }

  //Moving the snake 
  
  for(let i=snakeArr.length-2;i>=0;i--){
    snakeArr[i+1]={...snakeArr[i]};
  }

  snakeArr[0].x+=inputDir.x;
  snakeArr[0].y+=inputDir.y;
  //Display the snake and food

  //Display the snake

  board.innerHTML = ""
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index == 0) {
      snakeElement.classList.add('head')
      
      
    } else {
      snakeElement.classList.add('snake') 

    }
     
    board.appendChild(snakeElement);
    obj[0].style.backgroundImage=goku[ind1]
   
  });

  //Display the Food


  foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food')
  board.appendChild(foodElement);

   //To make then game hard
   if (snakeArr.length==8){
    if(ind1==6){
    alert("You Won Press A key to Play Again")
    ind1=0;
    snakeArr=[{x:10,y:10}];
    score=0;
    speed=8;
    index=0;
    }
    else{
    speed+=2;
    ind1++;
    }
    
    for(let i=0;i<=6;i++){
      snakeArr.pop()
    }
   }
 


}






//Main function
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
  inputDir = { x: 0, y: 1 }//start the game
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp")
      inputDir.x=0;
      inputDir.y=-1;
      break;
    case "ArrowDown":
      console.log("ArrowDown")
      inputDir.x=0;
      inputDir.y=1;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft")
      inputDir.x=-1;
      inputDir.y=0;
      break;
    case "ArrowRight":
      console.log("ArrowRight")
      inputDir.x=1;
      inputDir.y=0;
      break;
    default:
      break;
  }
});