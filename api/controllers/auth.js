import User from "../models/user.js"
export const register = async (req,res,next)=>{
   try{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    await newUser.save()
    res.status(201).json("user created")
   } catch(err){
    next(err)
   }
}