 import express from "express";
import { Login, Register,  } from "../controllers/user.controller";
import { registerValidation } from "../validatorsauth.validator";
import { validationResult } from "express-validator";

 const route=express.Router();
  
 route.post("/login",Login);

 route.post("/register", registerValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: "Validation failed.",
        errors: errors.array(),
      });
    }
    await Register(req, res);
  });
//  route.post("/register",Register);

 export default route