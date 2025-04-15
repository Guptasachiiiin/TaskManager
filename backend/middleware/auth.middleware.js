import jwt from "jsonwebtoken";
import userModel from "../models/user.model";

export const auth = async (req, res, next) => {
  try {
   

    if (req.headers.authorization) {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
      }
      const token = authHeader.split(' ')[1];
    //   console.log(token);

      const decode = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
      // console.log(decode);

      if (decode) {
        const userData = await userModel
          .findOne({ _id: decode.id })
          .select("-password");

        req.user = userData;
        return next();
      } else {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
