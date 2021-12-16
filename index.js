
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

// Classes

class Player {
    constructor(argW, argH, argColor, argX, argY, argHealth, argStrength) {
      this.w = argW;
      this.h = argH;
      this.color = argColor;
      this.x = argX;
      this.y = argY;
      this.health = argHealth;
      this.strength = argStrength
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w, this.h)
   }
}

    const wizard1 = new Player (50, 50, 'green', 200, 250, 10, 3);

    class Obstacle {
        constructor(argW, argH, argColor, argX, argY) {
            this.w = argW;
            this.h = argH;
            this.color = argColor;
            this.x = argX;
            this.y = argY;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w, this.h)
       }
    }

    const walls = [
        new Obstacle (50, 50, 'grey', 0, 0),
        new Obstacle (50, 50, 'grey', 50, 0),
        new Obstacle (50, 50, 'grey', 100, 0),
        new Obstacle (50, 50, 'grey', 150, 0),
        new Obstacle (50, 50, 'grey', 200, 0),
        new Obstacle (50, 50, 'grey', 250, 0),
        new Obstacle (50, 50, 'grey', 300, 0),
        new Obstacle (50, 50, 'grey', 350, 0),
        new Obstacle (50, 50, 'grey', 400, 0),
        new Obstacle (50, 50, 'grey', 450, 0),
        new Obstacle (50, 50, 'grey', 0, 50),
        new Obstacle (50, 50, 'grey', 0, 100),
        new Obstacle (50, 50, 'grey', 0, 150),
        new Obstacle (50, 50, 'grey', 0, 200),
        new Obstacle (50, 50, 'grey', 0, 250),
        new Obstacle (50, 50, 'grey', 0, 300),
        new Obstacle (50, 50, 'grey', 0, 350),
        new Obstacle (50, 50, 'grey', 0, 400),
        new Obstacle (50, 50, 'grey', 0, 450),
        new Obstacle (50, 50, 'grey', 50, 450),
        new Obstacle (50, 50, 'grey', 100, 450),
        new Obstacle (50, 50, 'grey', 150, 450),
        new Obstacle (50, 50, 'grey', 200, 450),
        new Obstacle (50, 50, 'grey', 250, 450),
        new Obstacle (50, 50, 'grey', 300, 450),
        new Obstacle (50, 50, 'grey', 350, 450),
        new Obstacle (50, 50, 'grey', 400, 450),
        new Obstacle (50, 50, 'grey', 450, 450),
        new Obstacle (50, 50, 'grey', 450, 50),
        new Obstacle (50, 50, 'grey', 450, 100),
        new Obstacle (50, 50, 'grey', 450, 150),
        new Obstacle (50, 50, 'grey', 450, 200),
        new Obstacle (50, 50, 'grey', 450, 250),
        new Obstacle (50, 50, 'grey', 450, 300),
        new Obstacle (50, 50, 'grey', 450, 350),
        new Obstacle (50, 50, 'grey', 450, 400),
        new Obstacle (50, 50, 'grey', 450, 450),
       ];
    
/*    class Opponent {
        constructor(argW, argH, argColor, argX, argY) {
            this.w = argW;
            this.h = argH;
            this.color = argColor;
            this.x = argX;
            this.y = argY;
            this.health = argHealth;
            this.strength = argStrength
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w, this.h)
       }
    }


   const monster1 = new Opponent (50, 50, 'red', 350, 350, 5, 2);
*/

const interval = setInterval(() => {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    wizard1.draw();
    walls.forEach((wall) => {
        wall.draw();
      });
}, 20)

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 87: // w
        wizard1.Y -= 1;
        break;
      case 83: // s
        wizard1.Y += 1;
        break;
      case 65: // a
        wizard1.X -= 1;
        break;
      case 68: // d
        wizard1.X += 1;
        break;
    }
  });