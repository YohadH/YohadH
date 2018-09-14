const url = "http://localhost:6447/api/gametable"
let games = {
    next: (value) => {
        console.log(value);
        const list = value.response;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            for (var field in item) {
                document.getElementById("results").innerHTML += field + " : " + item[field] + " , "
            }
            document.getElementById("results").innerHTML += "<br>"
        }
    },
    error: (err) => console.error(`ERROR at Loading`),
    complete: () => console.log(`COMPLETED`),
}


function getGames() {
    console.log("working")
    Rx.Observable.ajax(url).subscribe(games);
}

