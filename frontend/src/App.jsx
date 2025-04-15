import React from 'react'
// import Navbar from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/AllTask';
import Incomplete from './pages/Incomplete';
import Complete from './pages/Complete';
import TaskForm from './components/TaskForm';
import InProgress from './pages/InProgress';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-100vh p-3'>
      <ToastContainer position="top-right" autoClose={3000} />

      <BrowserRouter>
      <Routes >
        <Route element={<PublicRoute/>}>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        </Route>

      <Route element={<PrivateRoute/>}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/incomplete" element={<Incomplete/>} />
      <Route path="/complete" element={<Complete/>} />
      <Route path="/inprogress" element={<InProgress/>} />
      <Route path="/addnewtask" element={<TaskForm/>} />
      </Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App