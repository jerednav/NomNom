const Post = require('../models/Post')

module.exports = {
    getPost: async (req, res) => {
    try {
      const post = await Post.find({ user: req.user.id });
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

 createPost: async (req, res)=>{
  try{
      await Post.create({
          food: req.body.foodName,
          date: req.body.foodDate,
          calories: req.body.foodCalories,
          carbs: req.body.foodCarbs,
          protein: req.body.foodProtein,
          fat: req.body.foodFat,
          user: req.user.id
      })
      console.log('Post has been added!')
      res.redirect('/dashboard')
  }catch(err){
      console.log(err)
  }
},

deletePost: async (req, res)=>{
  console.log(req.body.notesIdFromJSFile)
  try{
      await Post.findOneAndDelete({_id:req.body.notesIdFromJSFile})
      console.log('Deleted Note')
      res.json('Deleted It')
  }catch(err){
      console.log(err)
  }
}
}
