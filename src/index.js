const rulesBtn = document.getElementById(rules-btn)
const closeBtn = document.getElementById(close-btn)
const rules = document.getElementById(rules)

// ANCHOR Canvas DOM Selectors

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// TODO

/**
 * Make pong
 */

let score = 0 

const brickRowCount = 9;
const brickColumnCount = 5;

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
}

const paddle = {
    x: canvas.width / 2 -40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0 // only moving on the x axis
}

// creating the brick props

const brickInfo = {
    w: 70, // bricks sharing the same props
    h: 20,
    padding: 10,
    offsetX: 45, // position on the x axes
    offsetY: 60, // position on the y-axes
    visible: true // When the brick gets hit it will be removed
}

console.log(bricks)

const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
    bricks[i] = [];
    for (let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = { x, y, ...brickInfo};
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.w, brick.h);
            ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
            ctx.fill();
            ctx.closePath();
        });
    });
}

// REVIEW Move paddle on cavas

function movePaddle() {
    paddle.x += paddle.dx; // paddle will not move until we use the keyboard events
}