const mongoose = require('mongoose');
const User7 = require('../modules/user7');
const Commnetuser7 = mongoose.model('commnetuser7',
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
         ref:'User7'
}
})
)
module.exports = Commnetuser7;
