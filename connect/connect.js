const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/eze')
     .then(
     ()=>{
      console.log('connect');
     })
     .catch(
      (err)=>{
        console.log(err);
        })
module.exports = mongoose;
//mongodb+srv://mahoud:mahmood1234@cluster0.k5feipn.mongodb.net/?retryWrites=true&w=majority