 import mongoose from "mongoose";

 const connection= async(url)=>{
    try {
        const response=await mongoose.connect(`${url}`)
        if (response) {
            console.log("Database connected")
        }
    } catch (error) {
        console.log("error while connention data base:"+error)
    }
 }
 export default connection