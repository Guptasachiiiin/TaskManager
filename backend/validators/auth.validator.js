import { body } from "express-validator";

export const registerValidation = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),

  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email"),

  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];



export const taskValidation = [
  body("title")
    .notEmpty().withMessage("Title is required")
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters"),

  body("description")
    .notEmpty().withMessage("Description is required")
    .isLength({ min: 5 }).withMessage("Description must be at least 5 characters"),

  body("status")
    .notEmpty().withMessage("Status is required")
    .isIn(["In Progress", "Completed", "In Complete"]).withMessage("Invalid status value"),

  body("priority")
    .notEmpty().withMessage("Priority is required")
    .isIn(["High", "Medium", "Low"]).withMessage("Invalid priority value"),

  body("dueDate")
    .notEmpty().withMessage("Due date is required")
    .isISO8601().withMessage("Due date must be in valid ISO 8601 format (yyyy-MM-dd)")
];

