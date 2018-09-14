
//put by id to game table row.
function putGameTable() {
    var req = new XMLHttpRequest();
    var the_id = document.getElementById("idtoupdate").value
    var url = 'http://localhost:6447/api/gametable/' + the_id
    req.open('PUT', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        alert('Updated!')
    }
    req.onerror = function () {
        alert('error')
    }
    var item = {
        Game_Name: document.getElementById("gamenametxt").value,
        Player1: document.getElementById("player1txt").value,
        Player2: document.getElementById("player2txt").value,
        Who_won: document.getElementById("whowontxt").value
    }
    req.send(JSON.stringify(item));
}

// delete by id .
function deleteGameTable() {
    var req = new XMLHttpRequest();
    var the_id = document.getElementById("idtodelete").value
    var url = 'http://localhost:6447/api/gametable/' + the_id
    req.open('DELETE', url)
    req.onload = function () {

        alert('deleted')
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}