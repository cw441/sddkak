const mongoose = require('mongoose');
const Login = mongoose.model('loge',
new mongoose.Schema({



email: { type:String,
      require:true,

},
name: {type:String ,
       required:true,
       minlength:3,
       maxlength:15,
},
passwred: { type:String,
           required:true
},

}
)
)

module.exports = Login;
