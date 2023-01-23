document.addEventListener("keydown", (event) => {
    event.preventDefault();

    switch(event.key) {
    case "w":
        model.rotateTetromino();
        break;
    case "d":
        model.moveTetromino(true);
        break;
    case "s": 
        model.moveDownTetromino();
        break;
    case "a":
        model.moveTetromino(false);
        break;
    case "p":
        alert("Tetris: jogo pausado!");
        break;
    }
})
