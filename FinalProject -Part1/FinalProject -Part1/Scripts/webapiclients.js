class WebAPIClient {
    constructor(realServer = Boolean) {
        this.realServer = realServer
    }
    fireGet() {

        if (this.realServer) {
            let promise = $.ajax({
                url: 'http://localhost:6447/api/gametable/'
            })
            return promise;
        }
        else {
            let promise = new Promise((resolve, reject) => {
                var _getGameP = [new GetPGame("Football", "Tal", "yohad", "Tal"),
                new GetPGame("runing", "Yohad", "tal", "yohad")]
                resolve(_getGameP)
                reject("Error ")
            });
            return promise;
        }

    }

    //let promise = $.ajax({
    //    url: 'http://localhost:3000/api/todo'
    //})
    //return promise;

}