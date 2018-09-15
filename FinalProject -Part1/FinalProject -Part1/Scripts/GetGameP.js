function GetPGame(game_Name, player1, player2, who_won) {
    this.Game_Name = game_Name
    this.Player1 = player1
    this.Player2 = player2
    this.Who_Won = who_won
    this.getpPrint = function () {
        return "Game_Name :  " + this.Game_Name +
            " PLayer1 :  " + this.Player1 + " PLayer2 :  " + this.Player2
            + " Who_Won ? : " + this.Who_Won
    }
}