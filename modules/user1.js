const mongoose = require('mongoose');
const User1 = mongoose.model('User1',
new mongoose.Schema({
name: {type:String},
desc: {type:String},
numberproduct: {type:String},
sizeproduct: {type:String},
prase: {type:String},
expar: {type:String},
image: {type:String},
conutry:{type:String}
})
)

module.exports = User1;
