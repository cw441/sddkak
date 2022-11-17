const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mahoud:mahmood1234@cluster0.k5feipn.mongodb.net/?retryWrites=true&w=majority')
     .then(
     ()=>{
      console.log('connect');
     })
     .catch(
      (err)=>{
        console.log(err);
        })
module.exports = mongoose;