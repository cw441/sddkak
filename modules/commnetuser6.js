const mongoose = require('mongoose');
const User6 = require('../modules/user6');
const Commnetuser6 = mongoose.model('commnetuser6',
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
         ref:'User6'
}
})
)
module.exports = Commnetuser6;
