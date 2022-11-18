const express = require('express');
var bodyParser = require('body-parser');

const User = require('./modules/user');
const prossesroutes = require('./routes/prossesuser');
require('./connect/connect');
const app = express();
app.use(express.json());

app.use('/userr', prossesroutes);
var port = process.env.PORT || 31000;
app.listen(port ,()=>{
console.log('wwred');
});
