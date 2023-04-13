const express = require ('express');
const router = express.Router();
const User = require('../modules/user');
const Login = require('../modules/login');
const Buying = require('../modules/buy');
const Commnetuser = require('../modules/commnetuser');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/////////////////login post/////////////////
router.post('/creat', async(req , res)=>{
try{
data= req.body;
ufr = Login(data);
sevedlogin = ufr.save()
res.status(200).send(sevedlogin)
}
catch(error)
{
res.status(400).send(error)
}

})
//////////////////post in ///////////////////////
router.post('/in', async(req,res)=>{
data= req.body;
ufr = await Login.findOne({email: data.email})
if(!ufr){
res.status(404).send('no email')
}else{
validPass =await Login.findOne ({passwred: data.passwred} )
if(!validPass){
res.status(401).send('no passwrod ')
}else{
payload = {
_id: ufr._id,
email: ufr.email,
passwred: ufr.passwred
}
token = jwt.sign(payload , '1234500')
res.status(200).send({
massege:"secsses",
ufr,
mytoken:token})
}
}
})
////////////////get one login////////////////
router.get('/getlogin/:ema/:pass', async(req , res)=>{
try{
ema = req.params.ema
pass = req.params.pass
ufr =await Login.find({email: ema , passwred:pass});
res.status(200).send(ufr);

}catch (error){
res.status(400).send(error)
}
}
)
/////////////////delet////////////////////
router.delete('/delete/:id', async(req , res)=>{
try{
id = req.params.id
deletelogin = await Login.findByIdAndDelete({_id: id});
res.send(deletelogin )
}catch(error)
{
res.send(error)
}
})
///////////////get data each login//////////////////
router.get('/getlogeach', async(req , res)=>{
try{
ufr =await Login.find();
res.status(200).send(ufr);

}catch (error){
res.status(400).send(error)
}
}
)
/////////////////post buy/////////////////////////
router.post('/addbuy', async(req , res)=>{
try{
data= req.body;
buey = Buying(data);
savedbuy = await buey.save();
res.status(200).send(savedbuy)

}
catch(error)
{
res.status(400).send(error)
}

})
/////////////////get buy/////////////////////////
  router.get('/getbuy', async(req , res)=>{
  try{
  buuy =await Buying.find();
  res.status(200).send(buuy);

  }catch (error){
  res.status(400).send(error)
  }
  })
/////////////////get buy/////////////////////////
router.get('/getbuy/:idn', async(req , res)=>{
try{
idn=req.params.idn
buuy =await Buying.find({iduser:idn});
res.status(200).send(buuy);

}catch (error){
res.status(400).send(error)
}
})
/////////////////delete buy////////////
router.delete('/delet/:id', async(req , res)=>{
 try{
 id = req.params.id
 deleteUser = await Buying.findByIdAndDelete({_id: id});
 res.send(deleteUser)
 }catch(error)
 {
 res.send(error)
 }
 })
 /////////////////update buy//////////////////////
 router.put('/upt/:id',async(req,res)=>{
 try{
 id=req.params.id;
 newData = req.body;
 updated= await Buying.findByIdAndUpdate({_id: id}, newData);
 res.send(updated);
 }catch(error){
 res.send(error)}
 })
///////////////post data////////////////////////
router.post('/ads', async(req , res)=>{
try{
data= req.body;
usr = User(data);
savedUser = await usr.save();
res.status(200).send(savedUser)

}
catch(error)
{
res.status(400).send(error)
}

})
////////////////////get data////////////////////
router.get('/gset', async(req , res)=>{
try{
users =await User.find();
res.status(200).send(users);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////get 111111////////////////////
router.get('/getd/:idn', async(req , res)=>{
try{
idn=req.params.idn

savedcomus =await User.find({name:idn});
res.status(200).send(savedcomus);

}catch (error){
res.status(400).send(error)
}
}
)
////////////////////delet data///////////////////
router.delete('/delet/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await User.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
/////////////////update data//////////////////////
router.put('/uptd/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User.updateOne({_id: id},{$set:{numberproduct:newData.numberproduct}});
res.send(updated);
}catch(error){
res.send(error)}
})
/////////////////post commnetuser///////////////////////
router.post('/comnetuserp', async(req , res)=>{
try{
data= req.body;
comus = Commnetuser(data);
savedcomus = await comus.save();
res.status(200).send(savedcomus)

}
catch(error)
{
res.status(400).send(error)
}

})
/////////////////get commnetuser////////////////////
router.get('/comnetuserg/:idn', async(req , res)=>{
try{
idn=req.params.idn

savedcomus =await Commnetuser.find({idname:idn}).populate('auther');
res.status(200).send(savedcomus);

}catch (error){
res.status(400).send(error)
}
}
)
///////////////////delete////////////////////
router.delete('/deletcq/:id', async(req , res)=>{
try{
id = req.params.id
deleteUser = await Commnetuser.findByIdAndDelete({_id: id});
res.send(deleteUser)
}catch(error)
{
res.send(error)
}
})
module.exports = router;