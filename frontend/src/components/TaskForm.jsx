// import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import api from "../instance";

const TaskForm = () => {
  const initialValues = {
    title: "",
    description: "",
    status: "In Progress",
    priority: "Medium",
    dueDate: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    dueDate: Yup.date().required("Due date is required"),
  });

  const Navigate = useNavigate();
  const handleSubmit = (values) => {
    // Do something with the form values
    console.log("Task Submitted:", values);
    api
      .post("api/task", values)
      .then((res) => {
        Navigate("/");
        console.log(res.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-md border border-gray-700 m-6">
      <h2 className="text-xl font-semibold mb-4">Add / Edit Task</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block mb-1">Title</label>
            <Field
              name="title"
              type="text"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block mb-1">Description</label>
            <Field
              name="description"
              as="textarea"
              rows="3"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1">Status</label>
              <Field
                as="select"
                name="status"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none"
              >
                <option>In Progress</option>
                <option>Completed</option>
                <option>In Complete</option>
              </Field>
            </div>

            <div className="w-1/2">
              <label className="block mb-1">Priority</label>
              <Field
                as="select"
                name="priority"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Field>
            </div>
          </div>

          <div>
            <label className="block mb-1">Due Date</label>
            <Field
              name="dueDate"
              type="date"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none"
            />
            <ErrorMessage
              name="dueDate"
              component="div"
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <div className="flex justify-end">
            <Link
              to="/"
              className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition !no-underline m-2"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className=" bg-blue-600 px-4 py-2 h-[50px] rounded text-white hover:bg-blue-500 transition m-2"
            >
              Save Task
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
