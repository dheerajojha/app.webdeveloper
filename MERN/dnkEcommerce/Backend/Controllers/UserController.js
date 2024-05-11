import UserModel from "../Models/UserModel.js"

const registerController =async (req,res)=>{
    const{userName,email,password} = req.body;
try {
    if(!userName || !email || !password){
        return res.status(400).json({success:false,message:'fill all fields'})
    }
    const existinguser =await  UserModel.findOne(email);
    if(existinguser){
        return res.status(400).json({success:false,message:'user already exist'})
    }
    const user =await UserModel.create(req.user)
    if(newUser) {
     res.status(201).json({success:false,message:'new user created successfully',user})
    }
} catch (error) {
    res.status(500).json({success:false,message:'error in user register'})
}
}

export {registerController}