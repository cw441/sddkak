const mongoose = require('mongoose');
const Login = require('../modules/login');
const Buying = mongoose.model('buying',
new mongoose.Schema({

namebuy: {
      type:String,
      require:true,
},
namedoe: {
       type:String ,
       required:true,
},
auther:{
         type:mongoose.Types.ObjectId,
         ref:'loge'
}

})
)
module.exports = Buying;
