function JDeleteGame() {
    var the_id = $("#idtodelete").val()
    var url_web_api = 'http://localhost:6447/api/gametable/' + the_id
    $.ajax({
        url: 'http://localhost:6447/api/gametable/' + the_id
    }).then(
        ajaxPostDataConfig = {
        type: "DELETE",
        url: url_web_api
        },
    $.ajax(ajaxPostDataConfig).then(
            function (resp) {
                console.log(resp)
            }
        ).fail(
            function (err) {
                console.error(err)
            }
        )
    )
}
function JputGame() {
    var the_id = $("#idtoupdate").val()
    var url_web_api = 'http://localhost:6447/api/gametable/' + the_id

    var item = {
        Game_Name: $("#gamenametxt").val(),
        Player1: $("#player1txt").val(),
        Player2: $("#player2txt").val(),
        Who_Won: $("#whowontxt").val()
    }
    console.log(item)

    // JSON.stringify(item)

    var ajaxPostDataConfig = {
        type: "PUT", // what is the method? post, get, put , delete
        url: url_web_api,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item) // request http body
    }

    $.ajax(ajaxPostDataConfig).then(
        // what to do after success?
        function (data) {
            console.log(data)
        }
    ).fail(
        // what to do on error
        function (err) {
            console.error(err)
        }
    )
}

