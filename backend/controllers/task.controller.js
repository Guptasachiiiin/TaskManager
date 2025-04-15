import taskModel from "../models/task.model";
import userModel from "../models/user.model";

export const Task = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;
    // const parsedDueDate = new Date(dueDate);
    // parsedDueDate.setUTCHours(0, 0, 0, 0)

    // if (isNaN(parsedDueDate.getTime())) {
    //   return res.status(400).json({
    //     message: "Invalid due date format",
    //     success: false,
    //   });
    // }
    const creatTask=await taskModel.create({title,description,status,priority,dueDate});
    if (creatTask) {
        const update =await userModel.findByIdAndUpdate({_id:req.user._id},{$push:{tasks:creatTask._id}})
       if (update) {
        return res.status(200).json({
            data:creatTask,
            message:"Task Created Successfully",
            success:true
        })
       }
    }
    return res.status(400).json({
       message:"Bad Request",
       success:false 
    })
  } catch (error) {
    return res.status(500).json({
      //   message: "Internal server Error..",
      message: error.message,
      success: false,
    });
  }
};

export const GetTask=async(req,res)=>{
try {
    const userData=await userModel.findOne({_id:req.user._id}).populate({
        path: "tasks",
        options: { sort: { createdAt: -1 } } 
      })
      .select("-password");
    if (userData) {
        return res.status(200).json({
            // data:userData.tasks,    //only tasks displayed
            data:userData.tasks,
            message:"Task fetct successfully",
            success:true
        })
    }  

    return res.status(400).json({
        message:"Bad Request",
        success:false
    })
} catch (error) {
    return res.status(500).json({
        //   message: "Internal server Error..",
        message: error.message,
        success: false,
      });
}
}


export const DeleteTask=async(req,res)=>{
try {
    const {task_id}=req.params;
    // console.log(task_id)
    const deleteTask=await taskModel.deleteOne({_id:task_id});
    if (deleteTask.deletedCount>0) {
        const update =await userModel.findByIdAndUpdate({_id:req.user._id},{$pull:{tasks:task_id}})
       if (update) {
        return res.status(200).json({
            message:"Task Deleted Successfully",
            success:true
        })
       }
    }
    return res.status(400).json({
        message:"Bad Request",
        success:false
    })
} catch (error) {
    return res.status(500).json({
        //   message: "Internal server Error..",
        message: error.message,
        success: false,
      });
}
} 

export const UpdateTask=async(req,res)=>{
    try {
        const {task_id}=req.params;
        const { title, description, status, priority, dueDate } = req.body;
        // const parsedDueDate = new Date(dueDate);
        // parsedDueDate.setUTCHours(0, 0, 0, 0)
    
        // if (isNaN(parsedDueDate.getTime())) {
        //   return res.status(400).json({
        //     message: "Invalid due date format",
        //     success: false,
        //   });
        // }
        const update=await taskModel.updateOne({_id:task_id},{$set:{title,description,status,priority,dueDate}});
        if (update.modifiedCount>0) {
            return res.status(200).json({
                message:"Updated Task Successfully",
                success:true
            })
        }

        return res.status(400).json({
            message:"Bad Request",
            success:false 
         })
    } catch (error) {
        return res.status(500).json({
            //   message: "Internal server Error..",
            message: error.message,
            success: false,
          });
    }
}
