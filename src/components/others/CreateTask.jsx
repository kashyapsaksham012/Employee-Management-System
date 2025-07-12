import React, { useState } from "react";
import NewTask from "../Auth/TaskList/NewTask";
import CompleteTask from "../Auth/TaskList/CompleteTask";

const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setTask({
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: category,
      assignTo: assignTo,
      active: false,
      newTask: true,
      failed: fasle,
      completeTask: false,
    });

    const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach(function(elem){
        if(assignTo == elem.firstName){
          elem.tasks.push(newTask)
        }
    })
  };
settaskTitle('')
settaskDescription('')
setTaskDate('')
setAssignTo('')
setCategory('')

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <form
        onSubmit={submitHandler}
        className="flex w-full mt-19 gap-6 items-start justify-between p-6 bg-[#2a2929] rounded-md"
      >
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="text-white mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Make a UI design"
              className="p-2 rounded-md bg-[#121212] text-white placeholder:text-gray-400 border border-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white mb-1">Task Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="p-2 rounded-md bg-[#121212] text-white border border-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white mb-1">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="Enter Employee name"
              className="p-2 rounded-md bg-[#121212] text-white placeholder:text-gray-400 border border-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="design, dev, etc"
              className="p-2 rounded-md bg-[#121212] text-white placeholder:text-gray-400 border border-gray-600"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h3 className="text-white mb-1">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            cols="30"
            rows="10"
            className="p-2 rounded-md bg-[#121212] text-white placeholder:text-gray-400 border border-gray-600"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
