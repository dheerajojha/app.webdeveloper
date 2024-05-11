import express from "express";
import userRoute from "./Routes/UserRoute.js"
import dotenv from "dotenv";
import dbConnect from "./Config/DbConnect.js";
dotenv.config();
 const PORT =process.env.PORT || 5000
 const app = express()
 dbConnect()

 // buildin middlewares
 app.use(express.json())
 app.use(express.urlencoded({extended:false}))
 
// routes
app.use('/api/user',userRoute)
 app.listen(PORT,()=>{
    console.log(`{backend listening on PORT ${PORT}}`)
 })
