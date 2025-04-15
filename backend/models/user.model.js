import mongoose, { model } from "mongoose";
import taskModel from "./task.model";


const Schema=mongoose.Schema;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:1,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    tasks:[
        {
            type:mongoose.Types.ObjectId,
            ref:taskModel,
        }
    ]

})

const userModel=mongoose.model("user",UserSchema);
 export default userModel