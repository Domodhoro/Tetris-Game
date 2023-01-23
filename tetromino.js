const shapes = [
    [],

    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ], 

    [
        [2,0,0],
        [2,2,2],
        [0,0,0]
    ],

    [
        [0,0,3],
        [3,3,3],
        [0,0,0]
    ],

    [
        [4,4],
        [4,4]
    ],

    [
        [0,5,5],
        [5,5,0],
        [0,0,0]
    ],

    [
        [0,6,0],
        [6,6,6],
        [0,0,0]
    ],

    [
        [7,7,0],
        [0,7,7],
        [0,0,0]
    ]
];

const colors = [
    '#000000',
    '#00FFFF',
    '#FFa500',
    '#0000FF',
    '#FFFF00',
    '#00FF00',
    '#993399',
    '#FF0000'
];

class Tetromino {
    constructor(shape, context) {
        this.shape   = shape;
        this.context = context;
        this.x       = Math.floor(columns / 2);
        this.y       = 0;
    }

    render = function() {
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                if (cell != 0) {
                    this.context.fillStyle = colors[cell];
                    this.context.fillRect(this.x + j, this.y + i, 1, 1);
                }
            })
        })
    }
}
