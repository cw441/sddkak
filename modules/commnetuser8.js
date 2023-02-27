const mongoose = require('mongoose');
const User8 = require('../modules/user8');
const Commnetuser8 = mongoose.model('commnetuser8',
new mongoose.Schema({

namecom: {
      type:String,
      require:true,
},

auther:{
         type:mongoose.Types.ObjectId,
         ref:'User8'
}
})
)
module.exports = Commnetuser8;
