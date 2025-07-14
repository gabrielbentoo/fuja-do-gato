const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameContainer = document.getElementById("game-container");

let playerX = 300, playerY = 300;
let enemyX = 50, enemyY = 50;
let playerSpeed = 4;
let enemySpeed = 10;
let keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

document.addEventListener("keydown", (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false
    }
});

function movePlayer() {
    if (keys.ArrowUp && playerY > 0) playerY -= playerSpeed;
    if (keys.ArrowDown && playerY < 450) playerY += playerSpeed;
    if (keys.ArrowLeft && playerX > 0) playerX -= playerSpeed;
    if (keys.ArrowRight && playerX < 450) playerX += playerSpeed;
    
    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
}

function moveEnemy() {
    let direction = Math.floor(Math.random() * 4);
    switch(direction) {
        case 0: if(enemyY > 0) enemyY -= enemySpeed; break;
        case 1: if(enemyY < 450) enemyY += enemySpeed; break;
        case 2: if(enemyX > 0) enemyX -= enemySpeed; break;
        case 3: if(enemyX < 450) enemyX += enemySpeed; break;
    }
    enemy.style.transform = `translate(${enemyX}px, ${enemyY}px)`;
}

function checkColision() {
    if(Math.abs(playerX - enemyX) < 40 && Math.abs(playerY - enemyY) < 40) {
        alert("🐈 O gato te pegou, Jogue novamente.");
        resetGame();
    }
}

function resetGame() {
    playerX = 200;
    playerY = 200;
    enemyX = 50;
    enemyY = 50;
    updateGame();
}

function updateGame() {
    movePlayer();
    moveEnemy();
    checkColision();
    requestAnimationFrame(updateGame);
}

updateGame();
