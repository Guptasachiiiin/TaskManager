# 📋 TaskManager

A full-stack task management application built with **React JS** and **Node.js**.

---

## 🚀 Getting Started

### 🔧 Clone the Repository

```bash
git clone https://github.com/Guptasachiiiin/TaskManager.git

```


🖥️ Frontend Setup


```bash
cd TaskManager/frontend
npm install
npm run dev

```
# Create a .env file in your /frontend folder
```bash
VITE_APP_BASE_URL=http://localhost:9000/
npm run dev

```

# The app will be available at:
👉 http://localhost:5173


💻 Frontend Tech Stack

⚛️ React JS
📦 Axios
📝 Formik & Yup (Form handling + validation)
🎨 Tailwind CSS
🎗 Bootstrap
🔔 React Toastify


🔧 Backend Setup

```bash
cd TaskManager/backend
npm install
```

⚙️ Create .env file
```bash
PORT=9000
MONGO_URI=mongodb+srv://username:<password>@cluster0.pasep0h.mongodb.net/TaskManagement
TOKEN_SECRET_KEY=mysecretkey
```

# ▶️ Start the Backend

```bash
npm run server
```
# API will be available at:
👉 http://localhost:9000


# 🛠 Backend Tech Stack
🖥 Node.js
🌐 Express
🛢 MongoDB + Mongoose
🔐 JWT Authentication
🔍 Express Validator

# 📘 Task Manager API Documentation

🔑 Authentication

✅ Register User
 POST /api/register

 🔐 Login User
POST /api/login

📝 Tasks

All task-related routes are protected and require a valid JWT token in the Authorization header.
```bash 
Authorization: Bearer <JWT_TOKEN>
```

🔄 Get All Tasks
GET /api/task

➕ Create New Task
POST /api/task

🧾 Update Task Status
PUT /api/task/:id

✏️ Edit Task
PUT /api/task/edit/:id

❌ Delete Task
DELETE /api/task/:id



# 📄 Features
🔐 JWT Auth (Login/Register)
✅ Create, Edit, Delete Tasks
📅 Task Due Dates
📊 Status Management (In Progress, Completed, In Complete)
🚀 Optimized UI with Tailwind


# 👏 Acknowledgements
React & React Router
Express & MongoDB
Tailwind & Bootstrap
Toastify
Formik & Yup


