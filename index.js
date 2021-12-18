
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

//Images

const playerImage = new Image();
playerImage.src = "./images/player.png";

const itemImage = new Image();
itemImage.src = "./images/potion.png";

const monImage = new Image();
monImage.src = "./images/dragon.png"

const wallImage = new Image();
wallImage.src = "./images/wall.jpg"


// Classes

class Obstacle {
    constructor(argW, argH, argColor, argX, argY, argImg) {
        this.w = argW;
        this.h = argH;
        this.color = argColor;
        this.x = argX;
        this.y = argY;
        this.img = argImg
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w, this.h)
   }
   paint () {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}
}


class Player {
    constructor(argW, argH, argColor, argX, argY, argHealth, argStrength, argID, argImg) {
      this.w = argW;
      this.h = argH;
      this.color = argColor;
      this.x = argX;
      this.y = argY;
      this.health = argHealth;
      this.strength = argStrength;
      this.id = argID;
      this.img = argImg
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w, this.h)
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
        constructor(argW, argH, argColor, argX, argY, argID, argEffect, argImg) {
            this.w = argW;
            this.h = argH;
            this.color = argColor;
            this.x = argX;
            this.y = argY;
            this.id = argID;
            this.effect = argEffect;
            this.img = argImg
        }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w, this.h)
       }
    paint () {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        }
   }



//Variables

    const wizard1 = new Player (35, 35, 'green', 260, 410, 10, 3, 0, playerImage);

    let monsters = [
        new Player (30, 30, 'red', 55, 55, 5, 2, '1', monImage),
        new Player (30, 30, 'red', 180, 410, 5, 2, '2', monImage)
        ]

    const walls = [
//Exterior Walls
        new Obstacle (50, 50, 'grey', 0, 0, wallImage),
        new Obstacle (50, 50, 'grey', 50, 0, wallImage),
        new Obstacle (50, 50, 'grey', 100, 0, wallImage),
        new Obstacle (50, 50, 'grey', 150, 0, wallImage),
        new Obstacle (50, 50, 'grey', 200, 0, wallImage),
        new Obstacle (50, 50, 'grey', 250, 0, wallImage),
        new Obstacle (50, 50, 'grey', 300, 0, wallImage),
        new Obstacle (50, 50, 'grey', 350, 0, wallImage),
        new Obstacle (50, 50, 'grey', 400, 0, wallImage),
        new Obstacle (50, 50, 'grey', 450, 0, wallImage),
        new Obstacle (50, 50, 'grey', 0, 50, wallImage),
        new Obstacle (50, 50, 'grey', 0, 100, wallImage),
        new Obstacle (50, 50, 'grey', 0, 150, wallImage),
        new Obstacle (50, 50, 'grey', 0, 200, wallImage),
        new Obstacle (50, 50, 'grey', 0, 250, wallImage),
        new Obstacle (50, 50, 'grey', 0, 300, wallImage),
        new Obstacle (50, 50, 'grey', 0, 350, wallImage),
        new Obstacle (50, 50, 'grey', 0, 400, wallImage),
        new Obstacle (50, 50, 'grey', 0, 450, wallImage),
        new Obstacle (50, 50, 'grey', 50, 450, wallImage),
        new Obstacle (50, 50, 'grey', 100, 450, wallImage),
        new Obstacle (50, 50, 'grey', 150, 450, wallImage),
        new Obstacle (50, 50, 'grey', 200, 450, wallImage),
        new Obstacle (50, 50, 'grey', 250, 450, wallImage),
        new Obstacle (50, 50, 'grey', 300, 450, wallImage),
        new Obstacle (50, 50, 'grey', 350, 450, wallImage),
        new Obstacle (50, 50, 'grey', 400, 450, wallImage),
        new Obstacle (50, 50, 'grey', 450, 450, wallImage),
        new Obstacle (50, 50, 'grey', 450, 50, wallImage),
        new Obstacle (50, 50, 'grey', 450, 100, wallImage),
        new Obstacle (50, 50, 'grey', 450, 150, wallImage),
        new Obstacle (50, 50, 'grey', 450, 200, wallImage),
        new Obstacle (50, 50, 'grey', 450, 250, wallImage),
        new Obstacle (50, 50, 'grey', 450, 300, wallImage),
        new Obstacle (50, 50, 'grey', 450, 350, wallImage),
        new Obstacle (50, 50, 'grey', 450, 400, wallImage),
        new Obstacle (50, 50, 'grey', 450, 450, wallImage),
//Interior Walls
new Obstacle (50, 50, 'grey', 50, 300, wallImage),
new Obstacle (50, 50, 'grey', 50, 350, wallImage),
new Obstacle (50, 50, 'grey', 50, 400, wallImage),
new Obstacle (50, 50, 'grey', 50, 450, wallImage),
new Obstacle (50, 50, 'grey', 400, 400, wallImage),
new Obstacle (50, 50, 'grey', 400, 200, wallImage),
new Obstacle (50, 50, 'grey', 400, 100, wallImage),
new Obstacle (50, 50, 'grey', 400, 50, wallImage),
new Obstacle (50, 50, 'grey', 350, 50, wallImage),
new Obstacle (50, 50, 'grey', 250, 50, wallImage),
new Obstacle (50, 50, 'grey', 200, 250, wallImage),
new Obstacle (50, 50, 'grey', 200, 200, wallImage),
new Obstacle (50, 50, 'grey', 200, 300, wallImage),
new Obstacle (50, 50, 'grey', 200, 150, wallImage),
new Obstacle (50, 50, 'grey', 200, 350, wallImage),
new Obstacle (50, 50, 'grey', 150, 350, wallImage),
new Obstacle (50, 50, 'grey', 150, 250, wallImage),
new Obstacle (50, 50, 'grey', 300, 350, wallImage),
new Obstacle (50, 50, 'grey', 300, 300, wallImage),
new Obstacle (50, 50, 'grey', 350, 300, wallImage),
new Obstacle (50, 50, 'grey', 300, 200, wallImage),
new Obstacle (50, 50, 'grey', 300, 150, wallImage),
new Obstacle (50, 50, 'grey', 100, 100, wallImage),
new Obstacle (50, 50, 'grey', 100, 150, wallImage),
       ];
    
    let potions = [
           new Item (25, 25, 'blue', 410, 165, '1', 2, itemImage),
           new Item (25, 25, 'blue', 410, 260, '2', 3, itemImage)
        ]



// Main game function

const interval = setInterval(() => {
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
}, 5)

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