class Tetris {
    constructor(context) {
        this.context          = context;
        this.fallingTetromino = null;
        this.grid             = new Grid(rows, columns).make();
    }

    render = function() {
        for (let i = 0; i < this.grid.length; i++) for (let j = 0; j < this.grid[i].length; j++) {
            const cell             = this.grid[i][j];
            this.context.fillStyle = colors[cell];

            this.context.fillRect(j, i, 1, 1);
        }

        if (this.fallingTetromino !== null) this.fallingTetromino.render();
    }

    moveTetromino = function(right) {
        if (this.fallingTetromino === null) return;

        const x = this.fallingTetromino.x;
        const y = this.fallingTetromino.y; 
        
        if (right) {
            if (!this.collision(x + 1, y)) this.fallingTetromino.x += 1;
        } else {
            if (!this.collision(x - 1, y)) this.fallingTetromino.x -= 1;
        }

        this.render();
    }

    moveDownTetromino = function() {
        if (this.fallingTetromino === null) {
            this.render(); 
            
            return;
        } else if (this.collision(this.fallingTetromino.x, this.fallingTetromino.y + 1)) {
            const shape = this.fallingTetromino.shape;

            shape.map((row, i) => {
                row.map((cell, j) => {
                    let u = this.fallingTetromino.x + j;
                    let v = this.fallingTetromino.y + i;

                    if (u >= 0 && u < columns && v < rows && cell > 0) this.grid[v][u] = shape[i][j];
                })
            })

            if (this.fallingTetromino.y === 0) {
                alert("Tetris: fim do jogo!");

                this.grid = new Grid(rows, columns).make();
            }

            this.fallingTetromino = null;
        } else {
            this.fallingTetromino.y += 1;
        }

        this.render();
    }

    rotateTetromino = function() {
        if (this.fallingTetromino !== null) {
            let shape = [...this.fallingTetromino.shape.map((row) => [...row])];
            
            for (let y = 0; y < shape.length; ++y) for (let x = 0; x < y; ++x) [shape[x][y], shape[y][x]] = [shape[y][x], shape[x][y]];

            shape.forEach((row => row.reverse()));

            if (!this.collision(this.fallingTetromino.x, this.fallingTetromino.y, shape)) this.fallingTetromino.shape = shape;
        }

        this.render();
    }

    collision = function(x, y, candidate = null) {
        const shape = candidate || this.fallingTetromino.shape;

        for (let i = 0; i < shape.length; i++) for (let j = 0; j < shape.length; j++) {
            if (shape[i][j] > 0) {
                let u = x + j;
                let v = y + i;

                if (u >= 0 && u < columns && v < rows) {
                    if(this.grid[v][u] > 0) return true;
                } else {
                    return true;
                }                 
            }
        }

        return false;
    }
}
