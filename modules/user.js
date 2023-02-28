const mongoose = require('mongoose');
const Commnetuser = require('../modules/commnetuser');
const User = mongoose.model('User',
new mongoose.Schema({
name: {type:String},
desc: {type:String},
numberproduct: {type:String},
sizeproduct: {type:String},
prase: {type:String},
expar: {type:String},
image: {type:String},
conutry:{type:String},

}
)
)

module.exports = User;
