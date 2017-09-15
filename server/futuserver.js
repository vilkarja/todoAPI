const express = require('express');
const bodyParser = require('body-parser');


var {Sum} = require('./models/sum');
var app = express();
app.use(bodyParser.json());

app.post('/sum', (req, res) => {
    var sum = new Sum({
        number3: req.body.number1 + req.body.number2
    });
    sum.then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Listening port 3000')
});