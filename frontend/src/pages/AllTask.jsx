import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import {  toast } from "react-toastify";
// import axios from "axios";
import api from "../instance";

const AllTask = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
      api.get("api/task")
      .then((Response) => {
        // console.log(Response.data.data)
        // toast.success("Tasks loaded successfully!");
        setData(Response.data.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to load tasks.");
      });
  }, []);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((task) => task._id !== id));
    toast.info("Task deleted.");
  };
  // const data = [
  //   {
  //     title: "Finish React Project",
  //     description:
  //       "Complete components and connect API. Ensure everything is responsive.",
  //     status: "In Progress",
  //     dueDate: "Apr 15",
  //     priority: "High",

  //   },
  //   {
  //     title: "Write Blog Post",
  //     description:
  //       "Create a blog post about useEffect and performance optimization.",
  //     status: "In Progress",
  //     dueDate: "Apr 18",
  //     priority: "Medium",

  //   },
  //   {
  //     title: "Team Meeting",
  //     description:
  //       "Weekly sync-up with team. Discuss sprint goals and blockers.",
  //     status: "Completed",
  //     dueDate: "Apr 10",
  //     priority: "Low",

  //   },
  //   {
  //     title: "Fix Login Bug",
  //     description:
  //       "Investigate and resolve the issue with the login not redirecting.",
  //     status: "In Complete",
  //     dueDate: "Apr 16",
  //     priority: "High",

  //   },
  // ];

  return (
    <>
      
      <div className="rounded-sm border border-white-600 h-full overflow-y-auto">
        <div className="w-full flex justify-end px-4 pt-3 sticky">
          <Link to="/addnewtask">
            <MdOutlineAddCircleOutline className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300" />
          </Link>
        </div>
        <div className="my-1 p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((data, index) => (
            <Card key={index} data={data} onDeleteSuccess={handleDelete} />
          ))}
          <Link
            to="/addnewtask"
            className="!no-underline w-95 h-64 mx-auto bg-gray-800 text-white shadow-lg rounded-xl p-6 mb-3 border-2 border-dashed border-gray-600 cursor-pointer hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <MdOutlineAddCircleOutline className="w-8 h-8 mb-2" />
              <p className="text-sm font-semibold !no-underline">
                Add New Task
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllTask;
