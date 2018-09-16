function GetPGame(game_Name,player1,player2,who_won) {
    this.game_Name = game_Name
    this.player1 = player1
    this.player2 = player2
    this.who_won = who_won
    this.getpPrint = function () {
        return "Game_Name :  " + this.game_Name +
            " player1 :  " + this.player1 + " player2 :  " + this.player2
            + " Who_Won ? : " + this.who_won
    }
}