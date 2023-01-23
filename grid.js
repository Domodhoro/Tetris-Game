class Grid {
    constructor(rows, columns) {
        this.rows    = rows;
        this.columns = columns;
    }

    make = function() {
        const grid = [];

        for (var i = 0; i < this.rows; i++) {
            grid.push([]);

            for (var j = 0; j < this.columns; j++) grid[grid.length - 1].push(0);
        }

        return grid;
    }
}
