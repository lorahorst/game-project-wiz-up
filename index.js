
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

//Images

const playerImage = new Image();
playerImage.src = "./images/player.png";

const itemImage = new Image();
itemImage.src = "./images/potion.png";

const monImage = new Image();
monImage.src = "./images/dragon.png"

const mon2Image = new Image();
mon2Image.src = "./images/bat.png"

const wallImage = new Image();
wallImage.src = "./images/wall.jpg"


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

levelTwoPopulation();

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
      console.log(wins)
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
}


// Main game function

window.onload = function () {
    document.getElementById("start-button").onclick = function () {
      document.getElementById("start-button").disabled = true;
      startGame()};
    document.getElementById("restart").onclick = function () {
      levelOnePopulation();
      startGame()};
  };


function startGame() {
    gameLoop = setInterval(() => {
        ctx.clearRect(0,0,canvas.width, canvas.height)
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
    }, 10)


    
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


/*function startCountdown () {}

var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);





// grame elments from html
const canvas = document.querySelector(".canvas");
const startBtn = document.querySelector(".startBtn");
const playAgainBtn = document.querySelector(".playAgainBtn");
const scoreList = document.querySelector(".scoreList");
const input = document.querySelector(".input");
const startBtnContainer = document.querySelector(".startBtnContainer");
const scoreListContainer = document.querySelector(".scoreListContainer");

// grab context from canvas and change font
const ctx = canvas.getContext("2d");
ctx.font = "20px monospace";

// gameScreen is start | game | score
let gameScreen = "start";

// game initial value
let name = "";
let timer = 0;
let score = 0;
// initial value of our score is grabed from local storage
const scoreArray = JSON.parse(localStorage.getItem("scores"));

// game loop
setInterval(() => {
  switch (gameScreen) {
    // case we are in the start screen
    case "start":
      startBtnContainer.style.visibility = "visible";
      scoreListContainer.style.visibility = "hidden";
      break;
    // case we are in the game screen
    case "game":
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timer++;
      ctx.fillText(timer, 15, 20);
      // condition for stopping the game and going to score screen
      if (timer > 100) {
        score = randomScore(100, 200);
        scoreArray.push({ name: name, score: score });
        localStorage.setItem("scores", JSON.stringify(scoreArray));
        createListScore(scoreArray);
        gameScreen = "score";
      }
      break;
    //case we are in the score screen
    case "score":
      scoreListContainer.style.visibility = "visible";
      break;
    default:
      break;
  }
}, 20);

// function to reset the initial value of the game
function resetGame() {
  timer = 0;
  score = 0;
  gameScreen = "start";
}

// garab a random score
function randomScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create a list element with the score and name
function createItemScore(score, name) {
  const scoreItem = document.createElement("li");
  scoreItem.innerHTML = `${name} ${score}`;
  scoreList.appendChild(scoreItem);
}

// create multiple list elements from an array
function createListScore(scoreArray) {
  scoreList.innerHTML = "";
  scoreArray.sort((score1, score2) => score2.score - score1.score);
  const top3Scores = [];
  for (let i = 0; i < 3; i++) {
    if (scoreArray[i]) {
      top3Scores.push(scoreArray[i]);
    }
  }
  const top3ScoresTransformed = top3Scores.map((scoreItem) => {
    const first3Letter = `
    ${scoreItem.name.charAt(0)}
    ${scoreItem.name.charAt(1)}
    ${scoreItem.name.charAt(2)}`;

    return {
      score: scoreItem.score,
      name: first3Letter.toLocaleUpperCase(),
    };
  });
  top3ScoresTransformed.forEach((scoreItem) => {
    createItemScore(scoreItem.score, scoreItem.name);
  });
}

// start button click logic
startBtn.onclick = () => {
  if (input.value) {
    name = input.value;
    input.value = "";
    gameScreen = "game";
    startBtnContainer.style.visibility = "hidden";
  }
};

// play again click logic
playAgainBtn.onclick = () => {
  resetGame();
};
*/