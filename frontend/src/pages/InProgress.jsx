import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
// import axios from "axios";
import { toast} from "react-toastify";
import api from "../instance";

const InProgress = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get("api/task")
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
    toast.info("Task deleted.")
  };
  return (
    <>
      <div className="rounded-sm border border-white-600 h-full">
        <div className="my-1 p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data&&data
            .filter((task) => task.status === "In Progress")
            .map((task, index) => (
              <Card key={index} data={task} onDeleteSuccess={handleDelete}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default InProgress;
