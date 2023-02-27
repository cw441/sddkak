const mongoose = require('mongoose');
const User5 = require('../modules/user5');
const Commnetuser5 = mongoose.model('commnetuser5',
new mongoose.Schema({

namecom: {
      type:String,
      require:true,
},

auther:{
         type:mongoose.Types.ObjectId,
         ref:'User5'
}
})
)
module.exports = Commnetuser5;
