let interface = {
    square: document.querySelectorAll(".square"),
    
    isGameOver: function () {
        try{
        let winnerCombination = game.check();

        for (let i of winnerCombination) {
            interface.square[i].style.backgroundColor = "rgb(0, 250, 0)";
        }
        } catch(err) {
            
        }
    },

    makePlay: function (squareId) {
        if (!game.playerTurn && !this.square[squareId].classList.contains("o")) {
            this.square[squareId].classList.add("x");
            game.board[squareId] = "x";
            game.playerTurn = !game.playerTurn
            game.check();
            this.isGameOver();
        } else if (game.playerTurn && !this.square[squareId].classList.contains("x")) {
            this.square[squareId].classList.add("o");
            game.board[squareId] = "o";
            game.playerTurn = !game.playerTurn
            game.check();
            this.isGameOver();
        }
    }
}

/* Init Config */
interface.square.forEach((square) => square.addEventListener("click", (event) => {
    if (game.gameOver === false) {
        interface.makePlay(event.target.id)
    }
}))
