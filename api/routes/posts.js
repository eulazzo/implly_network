const User = require('../models/User');
const router = require('express').Router();
const Post = require('../models/Post');


//create a post
router.post('/',async(req,res) => {

    const newPost = await new Post(req.body)
    try{
      const savedPost = await newPost.save();
      res.status(200).json(savedPost)
      
    }catch(err){
      res.status(500).json(err)
    }

})

//update a post
router.put('/:id',async(req,res)=> {
  
  console.log(req.body.userId)
  try{
    const post = await Post.findById(req.params.id)
    
    if(post.userId ===req.body.userId){
      await post.updateOne({$set:req.body})
      res.status(200).json('The post has been updated')
    }else{
      res.status(403).json('You can update only your post!')
    }
  }catch(error){
    res.status(403).json(error)
  }

})
//delete a post
router.delete('/:id',async(req,res)=> {

  try{
    
    const post = await Post.findById(req.params.id)
    if(post.userId ===req.body.userId){
      await post.deleteOne()
      res.status(200).json('The post has been deleted')
    }else{
      res.status(403).json('You can deleted only your post!')
    }

  }catch(error){
    res.status(403).json(error)
  }
})

 
module.exports = router