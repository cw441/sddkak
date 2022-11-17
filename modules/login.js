const mongoose = require('mongoose');
const Login = mongoose.model('loge',
{
email: {type:String},
name: {type:String},
passwred: {type:String},
}
)

module.exports = Login;
