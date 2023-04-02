const mongoose = require('mongoose');
const User = require('../modules/user');
const Commnetuser = mongoose.model('commnetuser',
new mongoose.Schema({

namecom: {
      type:String,
      require:true,
},
idname: {
      type:String,
      require:true,
},

auther:{
         type:mongoose.Types.ObjectId,
         ref:'User'
}

})
)
module.exports = Commnetuser;
