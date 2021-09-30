const Post = require('../models/Post')

module.exports = {
    getDashboard: async (req,res)=>{
        console.log(req.user)
        try{
            const post = await Post.find({})
            res.render('dashboard.ejs', {postFood: post})
        }catch(err){
            console.log(err)
        }

    }
}
    // createLog: async (req, res)=>{
    //     try{
    //         await Dashboard.create({
    //             food: req.body.foodName, 
    //             date: req.body.foodDate,
    //             calories: req.body.foodCalories,
    //             carbs: req.body.foodCarbs,
    //             protein: req.body.foodProtein,
    //             fat: req.body.foodFat,
    //         })
    //         console.log('Food Log has been added!')
    //         res.redirect('/dashboard')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
// }    