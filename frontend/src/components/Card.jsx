// import axios from "axios";
import React, { useState } from "react";
import Modal1 from "./Modal1";
import { toast } from "react-toastify";
import api from "../instance";

const Card = ({ data, onDeleteSuccess }) => {
  const [data1, setData1] = useState(data);
  const {
    _id, // assuming each task has a unique _id
    title,
    description,
    dueDate,
    priority,
  } = data1;

  const [date] = dueDate.split("T");

  const [modalShow, setModalShow] = useState(false);
  const [viewData, setViewData] = useState({});
  const [status, setStatus] = useState(data.status);

  const statusColor = {
    "In Progress": "bg-yellow-600",
    Completed: "bg-green-600",
    "In Complete": "bg-red-600",
  };

  const toggleStatus = () => {
    const newStatus = status === "Completed" ? "In Complete" : "Completed";
    api
      .put(
        `http://localhost:9000/api/task/${_id}`,
        { status: newStatus },
       
      )
      .then((res) => {
        setStatus(newStatus);
        console.log("Status updated successfully:", res.data.message);
        toast(res.data.message);
      })
      .catch((err) => {
        console.error("Error updating status:", err);
      });
  };

  const onDelete = () => {
    api
      .delete(`api/task/${_id}`)
      .then((response) => {
        console.log(response);
        onDeleteSuccess(_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = () => {
    setModalShow(true);
    setViewData(data);
  };

  return (
    <>
      <div className="w-full max-w-sm h-64 mx-auto bg-gray-900 text-white shadow-lg rounded-xl p-4 mb-3 border border-gray-700 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium truncate">{title}</h3>
            <button
              onClick={toggleStatus}
              className={`px-2 py-0.5 text-xs ${
                statusColor[status] || "bg-gray-600"
              } text-white rounded hover:opacity-80 transition m-2`}
            >
              {status}
            </button>
          </div>

          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
            {description}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span>Due: {date}</span>
            <span className="italic">{priority}</span>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={onEdit}
              className="px-3 py-0.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-500 transition m-2"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="px-3 py-0.5 text-xs bg-red-600 text-white rounded hover:bg-red-500 transition m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <Modal1
        setData1={setData1}
        show={modalShow}
        data={viewData}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Card;
