const router = require('express').Router()
const User = require('../models/User') 
const bcrypt = require('bcrypt')

//Register an user
router.post('/register',async(req,res) => {
 
  try{
    // generate a hashed new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
    
    // create a new user
    const newUser = new User({
      username:req.body.username.trim(),
      email:req.body.email.trim(),
      password:hashedPassword.trim(),
    })
    
    // save user 
    const user = await newUser.save()
    res.status(200).json(user)

  }catch(err){
    res.status(500).json(err)
  }
})

//Login
router.post('/login',async(req,res)=> {
  
  if(req.body.email && req.body.password){
    try{
  
      const user = await User.findOne({email:req.body.email})
      !user && res.status(404).send('user not found')
    
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(404).json('user not found')
  
    res.status(200).json(user)  
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(404).json('E-mail and password is necessary to Login, try again! ')
  }
  
   
})
 
module.exports = router;  