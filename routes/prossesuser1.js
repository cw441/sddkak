const express = require ('express');
const router = express.Router();
const User1 = require('../modules/user1');
const User2 = require('../modules/user2');
const User3 = require('../modules/user3');
const User4 = require('../modules/user4');
const User5 = require('../modules/user5');
const User6 = require('../modules/user6');
const User7 = require('../modules/user7');
const User8 = require('../modules/user8');
const User9 = require('../modules/user9');
const commnet = require('../modules/commnet');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


///////////////post data////////////////////////
router.post('/add1', async(req , res)=>{
try{
data= req.body;
usr = User1(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get1', async(req , res)=>{
try{
users =await User1.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet1/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User1.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/upt1/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User1.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})

///////////////post data////////////////////////
router.post('/add2', async(req , res)=>{
try{
data= req.body;
usr = User2(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})
////////////////////get data////////////////////
router.get('/get2', async(req , res)=>{
try{
users =await User2.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet2/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User2.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/upt2/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User2.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})


///////////////post data////////////////////////
router.post('/add3', async(req , res)=>{
try{
data= req.body;
usr = User3(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get3', async(req , res)=>{
try{
users =await User3.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet3/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User3.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/upt3/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User3.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})



///////////////post data////////////////////////
router.post('/add4', async(req , res)=>{
try{
data= req.body;
usr = User4(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get4', async(req , res)=>{
try{
users =await User4.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet4/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User4.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/upt4/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User4.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})


///////////////post data////////////////////////
router.post('/add5', async(req , res)=>{
try{
data= req.body;
usr = User5(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get5', async(req , res)=>{
try{
users =await User5.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet5/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User5.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/upt5/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User5.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})


///////////////post data////////////////////////
router.post('/add6', async(req , res)=>{
try{
data= req.body;
usr = User6(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get6', async(req , res)=>{
try{
users =await User6.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet6/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User6.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/upt6/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User6.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})


///////////////post data////////////////////////
router.post('/add7', async(req , res)=>{
try{
data= req.body;
usr = User7(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get7', async(req , res)=>{
try{
users =await User7.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet7/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User7.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/upt7/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User7.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})


///////////////post data////////////////////////
router.post('/add8', async(req , res)=>{
try{
data= req.body;
usr = User8(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get8', async(req , res)=>{
try{
users =await User8.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet8/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User8.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/upt8/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User8.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})

///////////////post data////////////////////////
router.post('/add9', async(req , res)=>{
try{
data= req.body;
usr = User9(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/get9', async(req , res)=>{
try{
users =await User9.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet9/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User9.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/upt9/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User9.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})


///////////////post data////////////////////////
router.post('/addc', async(req , res)=>{
try{
data= req.body;
usr = commnet(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})

////////////////////get data////////////////////
router.get('/getc', async(req , res)=>{
try{
users =await commnet.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/deletc/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await commnet.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/uptc/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await commnet.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})


module.exports = router;