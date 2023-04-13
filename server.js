const express = require('express');
var bodyParser = require('body-parser');

const User = require('./modules/user');
const prossesroutes = require('./routes/prossesuser');
const prossesroutes1 = require('./routes/prossesuser1');

require('./connect/connect');
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use('/userr', prossesroutes);
app.use('/user1', prossesroutes1);

var port = process.env.PORT || 27107;
app.listen(port ,()=>{
console.log('wwred');
});
