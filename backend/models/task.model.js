 import mongoose from "mongoose";
import { type } from "os";

 const Schema=mongoose.Schema;

 const TaskSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"In Progress"
    },
    priority:{
        type:String,
        default:"Medium"
    },
    dueDate:{
        type:Date,
    },

 },
 {
    timestamps:true
})
 const taskModel=mongoose.model("task",TaskSchema);
 export default taskModel;