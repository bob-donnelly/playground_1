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