window.onload = function(){
var canvas = document.getElementById('canvas');
var foodimg = document.getElementById('food');
var canvasimg = document.getElementById('canvasimg');
var ctx = canvas.getContext('2d');

const direction = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
 };

 var grid = 32;

 
var snakeArray = [];

snakeArray[0] = {
    x: 1,
    y: 1 
}

let beer = {
    x : Math.floor(Math.random()*17+1) * grid,
    y : Math.floor(Math.random()*15+1) * grid, 
}
    

    
 function drawShape(x,y,width,height,color){
    //ctx.clearRect(this.x*this.width,this.y*this.height,this.width,this.height);
   
    
    this.x=x;
    this.y=y;
    this.width=  width ;
    this.height=  height ;
    this.color=color;
    //ctx.beginPath();
    ctx.fillStyle= this.color;
    ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);
    ctx.strokeStyle = "#6b7032";
    ctx.lineWidth   = 1;
    ctx.strokeRect(this.x*this.width,this.y*this.height,this.width,this.height);
}

var getDirection;
document.addEventListener('keydown', function(e){
    let keyPressed = e.keyCode;
    if(keyPressed == direction.LEFT && getDirection != "right"){
        getDirection = "left";
    }else if(keyPressed == direction.UP  && getDirection != "bottom"){
        getDirection = "up";
    }else if(keyPressed == direction.RIGHT  && getDirection != "left"){
        getDirection = "right";
    }else if(keyPressed == direction.BOTTOM  && getDirection != "up"){
        getDirection = "bottom";
    }
})

// const food = new drawShape(Math.floor(Math.random() * 19+1),Math.floor(Math.random() *17+1),grid,grid,'red')
// food;








function snakeMove(){
    
    ctx.drawImage(canvasimg,0,0);
    ctx.drawImage(foodimg,beer.x,beer.y);
    
    for(var m =0; m<snakeArray.length;m++){
        const snake = new drawShape(snakeArray[m].x,snakeArray[m].y,grid,grid,"#"+((1<<24)*Math.random()|0).toString(16)) 
        
    }
    let snakeStartX = snakeArray[0].x;
    let snakeStartY = snakeArray[0].y;
    
    
    
    if(getDirection == 'left'){
        snakeStartX -= 1;
    }
    if(getDirection == 'up'){
        snakeStartY -= 1;
    }
    if(getDirection == 'right'){
        snakeStartX += 1;
    }
    if(getDirection == 'bottom'){
        snakeStartY += 1;
    }
    

   
    let snakeNewPos = {
        x:snakeStartX,
        y:snakeStartY
    }
    
    if(snakeStartX*grid == beer.x && snakeStartY*grid == beer.y)  {
        beer = {
            x : Math.floor(Math.random()*17+1) * grid,
            y : Math.floor(Math.random()*15+1) * grid, 
        }
        


    }else{
        snakeArray.pop();
    }
    
    snakeArray.unshift(snakeNewPos);
    
    if(snakeStartX > 17 || snakeStartX < 1 || snakeStartY > 15 || snakeStartY < 1){
        clearInterval(game)
    }
    
    
}

var game = setInterval(snakeMove,100);







}