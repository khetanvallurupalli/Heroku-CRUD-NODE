/**
 * 
 * @App
 * 
 */

const cors = require('cors')
    , bodyParser = require('body-parser')
    , express = require('express')
    , app = express()
    , db = require('./config/db')

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Mapping controllers 
app.use(require('./controllers/v1/payController'));

app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found.' })
});

module.exports = app;

