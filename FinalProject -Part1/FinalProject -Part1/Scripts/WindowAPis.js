
function WindowAPi() {

    this.games = {}
    var myWebApiClient = new WebAPIClient(false)

    this.getGameJQuery = function () {
        var promiseResult = myWebApiClient.fireGet();
        promiseResult.then(
            (data) => {
                this.games = data
                console.log(data)
            },
            (err) => {
                console.error(err)
            }
        )
    }

    this.printGame = function () {
        console.log(this.games)
        for (var i = 0; i < this.games.length; i++) {
            var todo = new GetPGame(this.games[i].game_Name,
                this.games[i].player1, this.games[i].player2,
                this.games[i].who_won)
            $('#results').append(todo.getpPrint())
            $('#results').append("<br>")
        }
    }
}