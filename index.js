
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

// Audio

let audio = new Audio("./Mystic.mp3")

//Images

const playerImage = new Image();
playerImage.src = "./images/player.png";

const itemImage = new Image();
itemImage.src = "./images/potion.png";

const monImage = new Image();
monImage.src = "./images/dragon.png";

const mon2Image = new Image();
mon2Image.src = "./images/bat.png";

const wallImage = new Image();
wallImage.src = "./images/wall.jpg";

const loseImage = new Image ();
loseImage.src = "./images/heart.png";


// Classes

class Obstacle {
    constructor(argW, argH, argX, argY, argImg) {
        this.w = argW;
        this.h = argH;
        this.x = argX;
        this.y = argY;
        this.img = argImg
    }
   paint () {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}
}

class Player {
    constructor(argW, argH, argX, argY, argHealth, argStrength, argID, argImg) {
      this.w = argW;
      this.h = argH;
      this.x = argX;
      this.y = argY;
      this.health = argHealth;
      this.strength = argStrength;
      this.id = argID;
      this.img = argImg
    }
    paint () {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
   checkcollision(wall) {
    return (
      this.x < wall.x + wall.w &&
      this.x + this.w > wall.x &&
      this.y < wall.y + wall.h &&
      this.y + this.h > wall.y
    );
  }
  checkfight(opponent) {
    return (
      this.x < opponent.x + opponent.w &&
      this.x + this.w > opponent.x &&
      this.y < opponent.y + opponent.h &&
      this.y + this.h > opponent.y
    );
  }
  checkitem(item) {
    return (
      this.x < item.x + item.w &&
      this.x + this.w > item.x &&
      this.y < item.y + item.h &&
      this.y + this.h > item.y
    );
  }

  //Movement

   moveUp () {
       this.y = this.y -= 5;
       walls.forEach((wall) => {
           if (this.checkcollision(wall)) {
               this.y += 5;
           }
       })
        potions.forEach((potion) => {
         if (this.checkitem(potion)) {
             wizard1.health = wizard1.health + potion.effect   
           potions = potions.filter((val) => {
                return val.id !== potion.id
            })
         }
        })
        monsters.forEach((monster) => {
            if (this.checkfight(monster)) {
            wizard1.health = wizard1.health - monster.strength;
            monsters = monsters.filter((val) => {
                return val.id !== monster.id
            })
        }
        })
   }

   moveDown () {
       this.y = this.y += 5;
       walls.forEach((wall) => {
        if (this.checkcollision(wall)) {
            this.y -= 5;
        }
    })
    potions.forEach((potion) => {
        if (this.checkitem(potion)) { 
            wizard1.health = wizard1.health + potion.effect     
          potions = potions.filter((val) => {
               return val.id !== potion.id
           })
        }
       })
    monsters.forEach((monster) => {
        if (this.checkfight(monster)) {   
        wizard1.health = wizard1.health - monster.strength;  
        monsters = monsters.filter((val) => {
               return val.id !== monster.id
           })
        }
       })
   }

   moveLeft () {
       this.x = this.x -= 5;
       walls.forEach((wall) => {
        if (this.checkcollision(wall)) {
            this.x += 5;
        }
    })
    potions.forEach((potion) => {
        if (this.checkitem(potion)) {  
            wizard1.health = wizard1.health + potion.effect    
          potions = potions.filter((val) => {
               return val.id !== potion.id
           })
        }
       })
       monsters.forEach((monster) => {
        if (this.checkfight(monster)) {    
        wizard1.health = wizard1.health - monster.strength; 
          monsters = monsters.filter((val) => {
               return val.id !== monster.id
           })
        }
       })
    }

    moveRight () {
        this.x = this.x += 5;
        walls.forEach((wall) => {
            if (this.checkcollision(wall)) {
                this.x -= 5;
            }
        })
        potions.forEach((potion) => {
            if (this.checkitem(potion)) {   
                wizard1.health = wizard1.health + potion.effect   
              potions = potions.filter((val) => {
                   return val.id !== potion.id
               })
            }
           })
        monsters.forEach((monster) => {
            if (this.checkfight(monster)) {  
            wizard1.health = wizard1.health - monster.strength;   
              monsters = monsters.filter((val) => {
                   return val.id !== monster.id
               })
            }
           })
    }
}

class Item {
        constructor(argW, argH, argX, argY, argID, argEffect, argImg) {
            this.w = argW;
            this.h = argH;
            this.x = argX;
            this.y = argY;
            this.id = argID;
            this.effect = argEffect;
            this.img = argImg
        }
    paint () {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        }
}


// Level 1 Variables

let wizard1
let potions
let monsters
let walls

let wins = 0;

function levelOnePopulation () {
  wizard1 = new Player (35, 35, 260, 410, 10, 3, 0, playerImage);

  monsters = [
      new Player (30, 30, 55, 55, 5, 2, '1', mon2Image),
      new Player (30, 30, 180, 410, 5, 10, '2', monImage)
    ];

  walls = [
//Exterior Walls
      new Obstacle (50, 50, 0, 0, wallImage),
      new Obstacle (50, 50, 50, 0, wallImage),
      new Obstacle (50, 50, 100, 0, wallImage),
      new Obstacle (50, 50, 150, 0, wallImage),
      new Obstacle (50, 50, 200, 0, wallImage),
      new Obstacle (50, 50, 250, 0, wallImage),
      new Obstacle (50, 50, 300, 0, wallImage),
      new Obstacle (50, 50, 350, 0, wallImage),
      new Obstacle (50, 50, 400, 0, wallImage),
      new Obstacle (50, 50, 450, 0, wallImage),
      new Obstacle (50, 50, 0, 50, wallImage),
      new Obstacle (50, 50, 0, 100, wallImage),
      new Obstacle (50, 50, 0, 150, wallImage),
      new Obstacle (50, 50, 0, 200, wallImage),
      new Obstacle (50, 50, 0, 250, wallImage),
      new Obstacle (50, 50, 0, 300, wallImage),
      new Obstacle (50, 50, 0, 350, wallImage),
      new Obstacle (50, 50, 0, 400, wallImage),
      new Obstacle (50, 50, 0, 450, wallImage),
      new Obstacle (50, 50, 50, 450, wallImage),
      new Obstacle (50, 50, 100, 450, wallImage),
      new Obstacle (50, 50, 150, 450, wallImage),
      new Obstacle (50, 50, 200, 450, wallImage),
      new Obstacle (50, 50, 250, 450, wallImage),
      new Obstacle (50, 50, 300, 450, wallImage),
      new Obstacle (50, 50, 350, 450, wallImage),
      new Obstacle (50, 50, 400, 450, wallImage),
      new Obstacle (50, 50, 450, 450, wallImage),
      new Obstacle (50, 50, 450, 50, wallImage),
      new Obstacle (50, 50, 450, 100, wallImage),
      new Obstacle (50, 50, 450, 150, wallImage),
      new Obstacle (50, 50, 450, 200, wallImage),
      new Obstacle (50, 50, 450, 250, wallImage),
      new Obstacle (50, 50, 450, 300, wallImage),
      new Obstacle (50, 50, 450, 350, wallImage),
      new Obstacle (50, 50, 450, 400, wallImage),
      new Obstacle (50, 50, 450, 450, wallImage),
//Interior Walls
new Obstacle (50, 50, 50, 300, wallImage),
new Obstacle (50, 50, 50, 350, wallImage),
new Obstacle (50, 50, 50, 400, wallImage),
new Obstacle (50, 50, 50, 450, wallImage),
new Obstacle (50, 50, 400, 400, wallImage),
new Obstacle (50, 50, 400, 200, wallImage),
new Obstacle (50, 50, 400, 100, wallImage),
new Obstacle (50, 50, 400, 50, wallImage),
new Obstacle (50, 50, 350, 50, wallImage),
new Obstacle (50, 50, 250, 50, wallImage),
new Obstacle (50, 50, 200, 250, wallImage),
new Obstacle (50, 50, 200, 200, wallImage),
new Obstacle (50, 50, 200, 300, wallImage),
new Obstacle (50, 50, 200, 150, wallImage),
new Obstacle (50, 50, 200, 350, wallImage),
new Obstacle (50, 50, 150, 350, wallImage),
new Obstacle (50, 50, 150, 250, wallImage),
new Obstacle (50, 50, 300, 350, wallImage),
new Obstacle (50, 50, 300, 300, wallImage),
new Obstacle (50, 50, 350, 300, wallImage),
new Obstacle (50, 50, 300, 200, wallImage),
new Obstacle (50, 50, 300, 150, wallImage),
new Obstacle (50, 50, 100, 100, wallImage),
new Obstacle (50, 50, 100, 150, wallImage),

    ];
  
  potions = [
         new Item (25, 25, 410, 165, '1', 2, itemImage),
         new Item (25, 25, 410, 260, '2', 3, itemImage)
    ];
}

levelOnePopulation();

// Level 2 Variables


function levelTwoPopulation () {
  wizard1 = new Player (35, 35, 60, 410, 10, 3, 0, playerImage);

  monsters = [
      new Player (30, 30, 55, 105, 5, 2, '1', mon2Image),
      new Player (30, 30, 410, 60, 5, 10, '2', monImage)
    ];

  walls = [
//Exterior Walls
      new Obstacle (50, 50, 0, 0, wallImage),
      new Obstacle (50, 50, 50, 0, wallImage),
      new Obstacle (50, 50, 100, 0, wallImage),
      new Obstacle (50, 50, 150, 0, wallImage),
      new Obstacle (50, 50, 200, 0, wallImage),
      new Obstacle (50, 50, 250, 0, wallImage),
      new Obstacle (50, 50, 300, 0, wallImage),
      new Obstacle (50, 50, 350, 0, wallImage),
      new Obstacle (50, 50, 400, 0, wallImage),
      new Obstacle (50, 50, 450, 0, wallImage),
      new Obstacle (50, 50, 0, 50, wallImage),
      new Obstacle (50, 50, 0, 100, wallImage),
      new Obstacle (50, 50, 0, 150, wallImage),
      new Obstacle (50, 50, 0, 200, wallImage),
      new Obstacle (50, 50, 0, 250, wallImage),
      new Obstacle (50, 50, 0, 300, wallImage),
      new Obstacle (50, 50, 0, 350, wallImage),
      new Obstacle (50, 50, 0, 400, wallImage),
      new Obstacle (50, 50, 0, 450, wallImage),
      new Obstacle (50, 50, 50, 450, wallImage),
      new Obstacle (50, 50, 100, 450, wallImage),
      new Obstacle (50, 50, 150, 450, wallImage),
      new Obstacle (50, 50, 200, 450, wallImage),
      new Obstacle (50, 50, 250, 450, wallImage),
      new Obstacle (50, 50, 300, 450, wallImage),
      new Obstacle (50, 50, 350, 450, wallImage),
      new Obstacle (50, 50, 400, 450, wallImage),
      new Obstacle (50, 50, 450, 450, wallImage),
      new Obstacle (50, 50, 450, 50, wallImage),
      new Obstacle (50, 50, 450, 100, wallImage),
      new Obstacle (50, 50, 450, 150, wallImage),
      new Obstacle (50, 50, 450, 200, wallImage),
      new Obstacle (50, 50, 450, 250, wallImage),
      new Obstacle (50, 50, 450, 300, wallImage),
      new Obstacle (50, 50, 450, 350, wallImage),
      new Obstacle (50, 50, 450, 400, wallImage),
      new Obstacle (50, 50, 450, 450, wallImage),
//Interior Walls
new Obstacle (50, 50, 100, 50, wallImage),
new Obstacle (50, 50, 100, 150, wallImage),
new Obstacle (50, 50, 100, 200, wallImage),
new Obstacle (50, 50, 100, 300, wallImage),
new Obstacle (50, 50, 100, 350, wallImage),

new Obstacle (50, 50, 200, 100, wallImage),
new Obstacle (50, 50, 200, 150, wallImage),
new Obstacle (50, 50, 200, 250, wallImage),

new Obstacle (50, 50, 250, 50, wallImage),
new Obstacle (50, 50, 250, 100, wallImage),
new Obstacle (50, 50, 250, 250, wallImage),
new Obstacle (50, 50, 250, 350, wallImage),
new Obstacle (50, 50, 250, 350, wallImage),

new Obstacle (50, 50, 300, 100, wallImage),

new Obstacle (50, 50, 350, 100, wallImage),
new Obstacle (50, 50, 350, 200, wallImage),
new Obstacle (50, 50, 350, 250, wallImage),
new Obstacle (50, 50, 350, 350, wallImage),
new Obstacle (50, 50, 350, 400, wallImage),

new Obstacle (50, 50, 400, 250, wallImage),
    ];
  
  potions = [
         new Item (25, 25, 60, 60, '1', 2, itemImage),
         new Item (25, 25, 410, 410, '2', 3, itemImage),
         new Item (25, 25, 260, 160, '3', 3, itemImage),
    ];
}


// Level functions

let gameLoop

function checkLevelWon() {
      if (monsters.length === 0) {
        youWon();
      }
      }

function youWon() {
      clearInterval (gameLoop) 
    	ctx.clearRect(0,0,canvas.width, canvas.height);
      console.log("You won! Continue with the next level!");
      wins++
      document.getElementById("continue").disabled = false;
      levelTwoPopulation();
}

function checkLevelLose() {
      if (wizard1.health === 0) {
        youLost();
      }
}

function youLost() {
      clearInterval (gameLoop) 
      ctx.clearRect(0,0,canvas.width, canvas.height)
      console.log("You lost!");
      loseScreen();
}

function loseScreen () {
      ctx.drawImage(loseImage, 0, 0, 500, 500)
}

// Main game function

window.onload = function () {
    document.getElementById("continue").disabled = true;
    document.getElementById("start-button").onclick = function () {
      document.getElementById("start-button").disabled = true;
      startGame()};
    document.getElementById("restart").onclick = function () {
      levelOnePopulation();
      startGame()};
    document.getElementById("continue").onclick = function () {
      levelTwoPopulation();
      startGame();
    }
  };


function startGame() {
    gameLoop = setInterval(() => {
        ctx.clearRect(0,0,canvas.width, canvas.height)
        document.getElementById("health").innerHTML = "Health " + wizard1.health;
        document.getElementById("strength").innerHTML = "Strength " + wizard1.strength;
        wizard1.paint();
        console.log(`health: ${wizard1.health}, strength: ${wizard1.strength}`)
        monsters.forEach((monster) => {
            monster.paint();
        })
        potions.forEach((potion) => {
            potion.paint();
        })
        walls.forEach((wall) => {
            wall.paint();
        });
        checkLevelWon();
        checkLevelLose(); 
        audio.play()
    }, 10)
    startTimer ();

    var timeleft = 30;
    function startTimer () {
      var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
       clearInterval(downloadTimer);
       document.getElementById("countdown").innerHTML = "Time is up! You lost!";
       youLost();
     } else {
       document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
     }
     timeleft -= 1;
    }, 1000);
      
    }
  
    
    document.addEventListener('keydown', (e) => {
        switch (e.keyCode) {
          case 87: // w
            wizard1.moveUp();
            break;
          case 83: // s
            wizard1.moveDown();
            break;
          case 65: // a
            wizard1.moveLeft();
            break;
          case 68: // d
            wizard1.moveRight();
            break;
        }
      });
} 



/*

// game initial value
let name = "";
let timer = 0;
let score = 0;

// function to reset the initial value of the game
function resetGame() {
  timer = 0;
  score = 0;
  gameScreen = "start";
}

// play again click logic
playAgainBtn.onclick = () => {
  resetGame();
};
*/