const mongoose = require('mongoose');
const User3 = require('../modules/user3');
const Commnetuser3 = mongoose.model('commnetuser3',
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
         ref:'User3'
}
})
)
module.exports = Commnetuser3;
