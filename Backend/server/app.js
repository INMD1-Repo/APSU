const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors")
require('dotenv').config();
const app = express();

app.set('port', process.env.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());

// router
const apiRouter = require('./router/api');
app.use('/api', apiRouter); 

//setting cors 
app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next(); 
}); 

app.listen(3000, ()=>{
    console.log(`server port: 3000`)
});