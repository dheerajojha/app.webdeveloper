import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
userName:{type:String,unique:true,required:true},
email:{type:String,unique:true,required:true},
password:{type:String,required:true},
})

userSchema.pre("save",async function(){
const salt =await bcrypt.genSalt(10);
this.password =await bcrypt.hash(this.password,salt)
})

userSchema.methods.isPasswordMatched =async function(enteredPassword){
  return this.password = await bcrypt.compare(enteredPassword,this.password)
}

const UserModel = mongoose.model("User",userSchema);
export default UserModel;