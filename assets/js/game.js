let game = {
    board: ['', '', '', '', '', '', '', '', ''],
    playerTurn: false, // false value refers to player 1 and true value to the player 2
    gameOver: false,

    // check for a winner
    check: function () {
        // The possible sequences to win
        let winnerConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // check for a winner
        for (let i of winnerConditions) {
            if (this.board[i[0]] == this.board[i[1]] &&
                this.board[i[1]] == this.board[i[2]] &&
                this.board[i[1]] != '') {
                this.gameOver = true;
                return [i[0], i[1], i[2]] // return the ids to use for switch backgrouhnd color for the sequence winner
            }
        }
    },

    // Reset the game data
    reset: function() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.gameOver = false;
        this.playerTurn = false;
    }
}
