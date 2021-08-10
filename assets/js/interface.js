let interface = {
    square: document.querySelectorAll(".square"),
    playerTurnContainer: document.querySelector("h2"),
    playerTurn: document.querySelector("#player-turn"),

    // Runs after the game ends
    GameOver: function () {
        // Switch background color of the winning sequence
        try {
            let winnerCombination = game.check();
            for (let i of winnerCombination) {
                interface.square[i].style.backgroundColor = "rgb(0, 250, 0)";
            }
        }
        catch {}
        this.playerTurnContainer.innerHTML = "Game Over"; // Inputs Game Over Message on Screen
    },

    // Changes Interface and save the data board on "game.board"
    makePlay: function (squareId) {
        if (!game.playerTurn && !this.square[squareId].classList.contains("o") &&
            !this.square[squareId].classList.contains("x")) {

            this.square[squareId].classList.add("x");
            this.playerTurn.innerHTML = "O"

            game.board[squareId] = "x";
            game.playerTurn = !game.playerTurn
            game.check();

        } else if (game.playerTurn && !this.square[squareId].classList.contains("x") &&
            !this.square[squareId].classList.contains("o")) {

            this.square[squareId].classList.add("o");
            this.playerTurn.innerHTML = "X"

            game.board[squareId] = "o";
            game.playerTurn = !game.playerTurn
            game.check();

        }

        if (game.gameOver) this.GameOver();
    },

    // Reset interface and the data (In the game.js)
    reset: function () {
        this.square.forEach((square) => {
            square.classList.remove("o");
            square.classList.remove("x");

            square.style.backgroundColor = "var(--blue-neon)";
        })
        this.playerTurnContainer.innerHTML = "Player Turn:<span id=player-turn>X</span>";
        this.playerTurn = document.querySelector("#player-turn");
        game.reset();
    }
}

/* Init Config */
// Initializes the game interface and rules
interface.playerTurn.innerHTML = "X";
interface.square.forEach((square) => square.addEventListener("click", (event) => {
    if (game.gameOver === false) {
        interface.makePlay(event.target.id)
    }
}))
