const mongoose = require('mongoose');
const commnet = mongoose.model(
'commnet',
{
commnet: {type:String},
commnet1: {type:String},

}
)

module.exports = commnet;

