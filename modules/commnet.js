const mongoose = require('mongoose');
const commnet = mongoose.model(
'commnet',
{
commnet: {type:String},

}
)

module.exports = commnet;

