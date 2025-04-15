import jwt from "jsonwebtoken";
import userModel from "../models/user.model";
import bcrypt from "bcrypt"

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(200).json({
        message: "User Already exist ..!",
        success: false,
      });
    }
    //   const userid = "id-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    const hashPassword = bcrypt.hashSync(password, 10);
    const createUser = await userModel.create({
      name,
      email,
      password: hashPassword,
      // userid,
    });
    if (createUser) {
      return res.status(200).json({
        data: createUser,
        message: "SignUp Successfull.",
        success: true,
      });
    }

    return res.status(400).json({
      message: "Bad Request",
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      // message: "Internal Server Error...",
      message: error.message,
      success: false,
    });
  }
};



export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(200).json({
        message: "User doesn't exist..!",
        success: false,
      });
    }
    const checkPass = bcrypt.compareSync(password, existingUser.password);
    if (checkPass) {
      const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: "10h" }
      );
      // const userid = encrypt(existingUser.userid);
      // Destructure only needed fields
      const {
        name,
        email,
        //   userid: rawUserid,
      } = existingUser;

      return res.status(200).json({
        data: {
          name,
          email,
          // userid, // send the encrypted one instead of raw
        },
        token,
        message: "Login Successful.",
        success: true,
      });
    }

    return res.status(400).json({
      message: "Invalid credentials",
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
    //   message: "Internal server Error..",
      message:error.message,
      success: false,
    });
  }
};
