
const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")














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
