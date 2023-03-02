const mongoose = require('mongoose');
const Buying = mongoose.model('buying',
new mongoose.Schema({
namebuy: {
      type:String,
      require:true,
},
image: {
      type:String,
      require:true,
},
prase: {
       type:String ,
       required:true,
},
numberproduct: {
      type:String,
      require:true,
},
tem: {
      type:String,
      require:true,
},
address: {
      type:String,
      require:true,
},
phone: {
      type:String,
      require:true,
},
iduser: {
      type:String,
      require:true,
},


})
)
module.exports = Buying;
