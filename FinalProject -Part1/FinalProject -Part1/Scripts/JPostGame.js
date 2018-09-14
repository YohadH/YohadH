function JPostGame() {
    var url_web_api = 'http://localhost:6447/api/gametable'

    var item = {
        Game_Name: $("#gamenametxt").val(),
        Player1: $("#player1txt").val(),
        Player2: $("#player2txt").val(),
        Who_Won: $("#whowontxt").val()
    }
    console.log(item)

    var ajaxPostDataConfig = {
        type: "POST",
        url: url_web_api,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item) 
    }

    $.ajax(ajaxPostDataConfig).then(
        function (data) {
            console.log(data)
        }
    ).fail(
        function (err) {
            console.error(err)
        }
    )



}