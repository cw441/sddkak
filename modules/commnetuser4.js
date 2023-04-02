const mongoose = require('mongoose');
const User4 = require('../modules/user4');
const Commnetuser4 = mongoose.model('commnetuser4',
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
         ref:'User4'
}
})
)
module.exports = Commnetuser4;
