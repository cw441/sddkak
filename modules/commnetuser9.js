const mongoose = require('mongoose');
const User9 = require('../modules/user9');
const Commnetuser9 = mongoose.model('commnetuser9',
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
         ref:'User9'
}
})
)
module.exports = Commnetuser9;
