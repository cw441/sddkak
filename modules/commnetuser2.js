const mongoose = require('mongoose');
const User2 = require('../modules/user2');
const Commnetuser2 = mongoose.model('commnetuser2',
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
         ref:'User2'
}
})
)
module.exports = Commnetuser2;
