class WebAPIClient {

    constructor(mock) {
        this.mock = mock
    }

    fireGet() {

        if (!this.mock) {
            var promise = $.ajax({
                url: 'http://localhost:6447/api/gametable'
            })
            return promise;
        }
        var p = new Promise(function (
            resolve,
            reject) {
            var fake = [new GetPGame(1, "1", "My fake todo", true), new GetPGame(3, "3", "My fake todo again", true)]
            setTimeout(() => { resolve(fake) }, 1000);
            resolve(fake)
            var err = "error on loading info"
            reject(err)
        }
        );
        return p

    }

}