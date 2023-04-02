const mongoose = require('mongoose');
const User1 = require('../modules/user1');
const Commnetuser1 = mongoose.model('commnetuser1',
new mongoose.Schema({

namecom: {
      type:String,
      require:true,
},
idname: {
      type:String,
      require:true,
},
iduser: {
      type:String,
      require:true,
},
auther:{
         type:mongoose.Types.ObjectId,
         ref:'User1'
}
})
)
module.exports = Commnetuser1;
