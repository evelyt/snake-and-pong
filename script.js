const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const gameOverScrenn = document.getElementById('game-over');
const restart = document.getElementById('restart-btn');

const GRID_SIZE = 20;
const SNAKE_SIZE = GRID_SIZE;
const FOOD_SIZE = GRID_SIZE;

let snake, food, dx, dy, blinkCounter;
let gamePaused = false;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;

let currentScoreElem = document.getElementById('current-score');
let highScoreElem = document.getElementById('highScore');


//