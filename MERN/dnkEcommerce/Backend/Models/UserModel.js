import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
userName:{type:String,unique:true,required:true},
email:{type:String,unique:true,required:true},
password:{type:String,unique:true,required:true},
})

userSchema.pre("save",async function(){
const salt =await bcrypt.genSalt(10);
this.password = bcrypt.hash(this.password,salt)
})

const UserModel = mongoose.model("User",userSchema);
export default UserModel;