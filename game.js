// 1️⃣ Get the canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// 2️⃣ Player object (just data)
const player = {
  x: 200,
  y: 500,
  width: 30,
  height: 30,
  velocityY: 0,
  onGround: false
};

// 3️⃣ Physics values
const gravity = 0.6;
const jumpPower = -12;

// 4️⃣ Listen for keyboard input
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && player.onGround) {
    player.velocityY = jumpPower;
    player.onGround = false;
  }
});

// 5️⃣ Game loop (runs ~60 times per second)
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// 6️⃣ Update game state
function update() {
  // Apply gravity
  player.velocityY += gravity;
  player.y += player.velocityY;

  // Simple ground
  if (player.y + player.height >= canvas.height) {
    player.y = canvas.height - player.height;
    player.velocityY = 0;
    player.onGround = true;
  }
}

// 7️⃣ Draw everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player
  ctx.fillStyle = "white";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// 8️⃣ Start the game
gameLoop();
