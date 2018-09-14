
//posting a new game by value (id auto.)
function postGametable() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:6447/api/gametable'
    req.open('POST', url)
    req.setRequestHeader("Content-Type", "application/json")
    req.onload = function () {
        alert('Created!')
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