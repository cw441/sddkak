const mongoose = require('mongoose');
const User6 = mongoose.model('User6',
{
name: {type:String},
desc: {type:String},
numberproduct: {type:String},
sizeproduct: {type:String},
prase: {type:String},
expar: {type:String},
image: {type:String},
conutry:{type:String}
}
)

module.exports = User6;
