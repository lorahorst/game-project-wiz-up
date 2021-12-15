
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

    const wizard1 = new Player (30, 30, 'red', 0, 110, 10, 3);

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

    const wall = new Obstacle (30, 30, 'grey', 0, 0);



const interval = setInterval(() => {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    wizard1.draw();
    wall.draw();
}, 20)


document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 87: // w
        player.speedY -= 1;
        break;
      case 83: // s
        player.speedY += 1;
        break;
      case 65: // a
        player.speedX -= 1;
        break;
      case 68: // d
        player.speedX += 1;
        break;
    }
  });


