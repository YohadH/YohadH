const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

var path = require('path');
var http = require("http");
var url = require("url");
var cors = require("cors");


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, '../')));

app.options('*', cors());


// url: http://localhost:3000/
app.get('/', (request, response) => response.send('Hello World'));

// all routes prefixed with /api
app.use('/api', router);



// using router.get() to prefix our path
// url: http://localhost:3000/api/
router.get('/', (request, response) => {
    response.json({ message: 'Hello, welcome to my server' });
});


router.get('/get', (request, response) => {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;
    // e.g. myVenues = 12;
    var myResponse = `I multiplied the number you gave me (${myParam}) by 5 and got: ${myParam * 5}`;
    
    response.json([
        {
            "Game_Name": "Tenis",
            "Player1": "ran",
            "Player2": "dan",
            "Who_won": "dan"
        },
        {
            "Game_Name": "Football",
            "Player1": "ziv",
            "Player2": "ron",
            "Who_won": "ziv"
        }]);
});


// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));