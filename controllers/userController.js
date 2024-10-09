const users = require('../models/userModel')
const jwt=require('jsonwebtoken')


exports.userRegistration = async (req, res) => {
    console.log(req.body);
    // res.send('<h3>Request for user registration is hit </h3>')
    const { email, password, username } = req.body
    if (!email || !password || !username) {
        res.status(400).json("Invalid Data")
    } else {
        const newUser = new users({
            email, password, username
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
}

exports.userLogin = async (req, res) => {
    try{
        const {email,password}=req.body
        const existing=await users.findOne({email,password})       
        if(existing){
            const token=jwt.sign({userId:existing._id},process.env.SECRET_KEY)
            res.status(200).json({token,username:existing.username})
            
        }else{
            res.status(400).json('Invalid username or password')
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}


















// const products=[
//     {id:1,name:'Iphone 12',price:15789},
//     {id:2,name:'Iphone 16',price:47689},
//     {id:3,name:'Iphone 14',price:30009}
// ]

// exports.productSet=(req,res)=>{
//     res.status(200).json(products)
// }

// exports.getProduct=(req,res)=>{
//     const {pid}=req.params
//     console.log(pid);
//     const product=products.find(item=>item.id==pid)
//     res.status(200).json(product)
// }