import express from "express";
import cors from "cors";
import connection from "./database/db.js";
import { configDotenv } from "dotenv";
import userRoute from "./routes/user.route.js";
import taskRoute from "./routes/task.route.js";
configDotenv();

const port = process.env.PORT || 9000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend on localhost:5174
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

app.use(express.json());
connection(process.env.MONGO_URI); // database connection

app.get("/", (req, res) => {
  res.send("server is running...........");
});
app.listen(port, () => {
  console.log("server is running on  http://localhost:" + port);
});

app.use("/api/auth", userRoute); //auth route
app.use("/api", taskRoute); //task route
