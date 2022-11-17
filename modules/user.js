const mongoose = require('mongoose');
const User = mongoose.model('User',
{
name: {type:String},
last: {type:String},
apw:{type:String}
}
)

module.exports = User;
