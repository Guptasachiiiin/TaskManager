import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { toast } from 'react-toastify';
import api from '../instance';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Required'),
  });


  // const [error1,setError1]=useState("")
  const Navigate=useNavigate();

  const handleSubmit = (values) => {
   console.log("Signin"+values)
    api.post('api/auth/login',values)
    .then(res=>{
      Navigate("/")
      console.log(res.data.token);
      toast.success(res.data.message)
      // setError1("")
      sessionStorage.setItem("email",JSON.stringify(res.data.data.email))
      sessionStorage.setItem("name",JSON.stringify(res.data.data.name))
      sessionStorage.setItem("token",res.data.token)
    })
    .catch(err=>{
      console.log(err);
      toast.error("Login Failed.!")
      // setError1("Username & Password is Incorrect")
    })
  };
  return (
    <>

    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="space-y-4">
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition">
              Sign In
            </button>
          </Form>
        </Formik>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Don’t have an account? <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignIn;
