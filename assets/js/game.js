let game = {
    board: ['', '', '', '', '', '', '', '', ''],
    playerTurn: false, // false value refers to player 1 and true value to the player 2
    gameOver: false,

    check: function () {
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

        for (let i of winnerConditions) {
            if (this.board[i[0]] == this.board[i[1]] &&
                this.board[i[1]] == this.board[i[2]] &&
                this.board[i[1]] != '') {
                this.gameOver = true;
                return [i[0], i[1], i[2]]
            }
        }

    }
}
