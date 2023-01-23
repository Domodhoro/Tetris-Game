const gameSize   = 25;
const rows       = 24;
const columns    = 10;
const canvas     = document.getElementById("tetrisCanvas");
const scoreboard = document.getElementById("scoreboard");
const context    = canvas.getContext("2d");
let score        = 0;
let model        = new Tetris(context);

context.scale(gameSize, gameSize);

filledLine = function(row) {
    for (const x of row) if (x === 0) return false;
    
    return true;
}

state = function() {
    const scoreWorth = 10;

    for (let i = 0; i < model.grid.length; i++) {
        if (filledLine(model.grid[i])) {
            score += scoreWorth;

            model.grid.splice(i, 1); 
            model.grid.unshift([0,0,0,0,0,0,0,0,0,0]);
        }
    }

    scoreboard.innerHTML = "Score: " + String(score) + ".";

    if (model.fallingTetromino === null) {
        const rand             = Math.round(Math.random() * 6) + 1;
        const newTetromino     = new Tetromino(shapes[rand], context);
        model.fallingTetromino = newTetromino;
        
        model.moveDownTetromino();
    } else {
        model.moveDownTetromino();
    }
}

main = function() {
	const step = 1000;

	setInterval(() => state(), step);
}