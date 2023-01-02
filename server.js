// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
var bodyParser = require('body-parser');
// Render static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
 }));
app.set('view engine', 'ejs');
// Port website will run on

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/main', (req, res) => {
    res.render('pages/main');
});

app.post("/main", function(request, response, next) {
    var subject = request.body.subject;
    var text = request.body.text;
    var date = new Date();
    var currentDate = ('0' + date.getDate()).slice(-2) + ('0' + (date.getMonth()+1)).slice(-2) + "23";
    console.log(request.body.subject);

    //sanitize input
    var sanitizedString = "";
    for (var i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (char == '<' || char == '>') {
            continue;
        } else if (char == '&') {
            sanitizedString += "and";
        } else {
            sanitizedString += char;
        }
    }

    const fs = require('fs');

    let rawdata = fs.readFileSync('./public/data.json');
    let currentJson = JSON.parse(rawdata);
    currentJson.push([subject, sanitizedString, currentDate]);
    var json = JSON.stringify(currentJson, null, 4);
    fs.writeFileSync('./public/data.json', json);
    response.render('pages/main');
})

app.listen(3000);
