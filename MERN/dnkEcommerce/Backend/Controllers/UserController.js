import generateToken from "../Config/GenerateToken.js";
import UserModel from "../Models/UserModel.js"

const registerController =async (req,res)=>{
    const{userName,email,password} = req.body;
try {
    if(!userName || !email || !password){
        return res.status(400).json({success:false,message:'fill all fields'})
    }
    const existinguser =await UserModel.findOne({email});
    if(existinguser){
        return res.status(400).json({success:false,message:'user already exist'})
    }
    const user =await UserModel.create(req.body)
    if(user) {
     res.status(201).json({success:true,message:'new user created successfully',user})
    }
} catch (error) {
    res.status(500).json({success:false,message:error.message})
}
}

const loginController =async (req,res)=>{
    const{email,password}=req.body;
    try {
        if(!email || !password){
            return res.status(400).json({success:false,message:'fill all fields'})
        }
        const findUser = await UserModel.findOne({email})
        if(findUser && await findUser.isPasswordMatched(password)){
            res.status(200).json({success:true,message:'user loggged in successfully',findUser,token:generateToken(findUser._id)})
           
        }else{
            res.status(500).json({success:false,message:'wrong password or email'})
        }       
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}

export {registerController,loginController}