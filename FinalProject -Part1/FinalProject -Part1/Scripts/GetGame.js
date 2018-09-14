// getting all the game table

function getGameTable() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:6447/api/gametable'
    req.open('GET', url)
    req.onload = function () {
        var list = JSON.parse(req.response)
        console.log(req.response)
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            for (var field in item) {
                document.getElementById("results").innerHTML += field + " : " + item[field] + " , "
            }
        }
    }
    req.onerror = function () {
        alert("erorr")
    }
    req.send()
}
// geting game table by id . 

function getGameTablebyid() {
    var req = new XMLHttpRequest();
    var the_id = document.getElementById("idtable").value
    var url = 'http://localhost:6447/api/gametable/' + the_id
    req.open('GET', url)
    req.onload = function () {

        var one = JSON.parse(req.response)
        for (var field in one) {
            document.getElementById("results").innerHTML += field + " : " + one[field] + " , "
        }
        document.getElementById("results").innerHTML += "<br>"
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}