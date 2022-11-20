const mongoose = require('mongoose');
const Login = mongoose.model('loge',
{


email: { type:String,
      require:true,

},
name: {type:String ,
       unique:true,
       required:true,
       minlength:3,
       maxlength:15,
},
passwred: { type:String,
           required:true
},
}
)

module.exports = Login;
