import express from "express";
import { DeleteTask, GetTask, Task, UpdateTask } from "../controllers/task.controller";
import { auth } from "../middleware/auth.middleware";
import { taskValidation } from "../validators/auth.validator";
import { validationResult } from "express-validator";

const route = express.Router();
//  route.post("/task",auth,Task)


//express validator response
  const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: "Validation failed.",
        errors: errors.array(),
      });
    }
    next();
  };


 route.post("/task", auth, taskValidation, validate, Task);
 route.get("/task",auth,GetTask)
 route.delete("/task/:task_id",auth,DeleteTask)
 route.put("/task/:task_id",auth,UpdateTask)




export default route;
