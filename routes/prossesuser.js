const express = require ('express');
const router = express.Router();
const User = require('../modules/user');
const Login = require('../modules/login');
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
res.status(200).send({ufr,mytoken:token})
}
}
})
////////////////get login////////////////
router.get('/getlogin', async(req , res)=>{
try{
ufr =await Login.find();
res.status(200).send(ufr);

}catch (error){
res.status(400).send(error)
}
}
)

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
/////////////////delet////////////////////
router.delete('/delet/:id', async(req , res)=>{
try{
id = req.params.id
deletelogin = await Login.findByIdAndDelete({_id: id});
res.send(deletelogin )
}catch(error)
{
res.send(error)
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
router.put('/upt/:id',async(req,res)=>{
try{
id=req.params.id;
newData = req.body;
updated= await User.findByIdAndUpdate({_id: id}, newData);
res.send(updated);
}catch(error){
res.send(error)}
})


module.exports = router;