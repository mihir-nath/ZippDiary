const asyncHandler = require("express-async-handler");
const user =require("../models/userModel");
const generateToken = require("../utils/generateToken");


const registerUser = asyncHandler(async(req,res) => {
    const {name,email,password} = req.body;
    
    const userExists= await user.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User Already Exists");
    }

    const User= await user.create({
        name,email,password
    });
    
    if(User){
        res.status(201).json({
            _id:User._id,
            name:User.name,
            email:User.email,
            token:generateToken(User._id),
        });
    }else{
        res.status(400)
        throw new Error("Error!");
    }
});

const loginUser = asyncHandler(async (req,res) =>{
   const { email,password}= req.body;

   const User= await user.findOne({email});

   if(User && (await User.matchPassword(password))){
    res.json({
        _id:User._id,
        name:User.name,
        email:User.email,
        token:generateToken(User._id),
    }); 
   }else {
    res.status(400);
    throw new Error("invalid email or password");
   }

});


module.exports =  {registerUser,loginUser};

