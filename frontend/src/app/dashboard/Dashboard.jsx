import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", description: "This is task 1" },
    { id: 2, name: "Task 2", description: "This is task 2" },
  ]);

  const [taskInput, setTaskInput] = useState({ name: "", description: "" });

  // Initialize AOS
  React.useEffect(() => {
    AOS.init();
  }, []);

  const handleAddTask = () => {
    const newTask = { id: Date.now(), ...taskInput };
    setTasks([...tasks, newTask]);
    setTaskInput({ name: "", description: "" });
  };

  const handleEditTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <nav className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold">My Dashboard</h2>
          </div>
          <ul className="flex flex-col mt-4">
            <li className="hover:bg-gray-700 cursor-pointer py-2 px-4">Home</li>
            <li className="hover:bg-gray-700 cursor-pointer py-2 px-4">
              Tasks
            </li>
            <li className="hover:bg-gray-700 cursor-pointer py-2 px-4">
              Reports
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Tasks Management</h1>

        {/* Task Form */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Task Name"
            className="border rounded p-2 mr-2"
            value={taskInput.name}
            onChange={(e) =>
              setTaskInput({ ...taskInput, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Task Description"
            className="border rounded p-2 mr-2"
            value={taskInput.description}
            onChange={(e) =>
              setTaskInput({ ...taskInput, description: e.target.value })
            }
          />
          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 flex items-center"
          >
            <FaPlus className="mr-2" /> Add Task
          </button>
        </div>

        {/* Tasks Table */}
        <div data-aos="fade-up" className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Task Name
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Description
                </th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="py-3 px-4 text-gray-800">{task.name}</td>
                  <td className="py-3 px-4 text-gray-800">
                    {task.description}
                  </td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button
                      onClick={() =>
                        handleEditTask(task.id, {
                          name: "Updated Task",
                          description: "Updated Description",
                        })
                      }
                      className="bg-blue-500 text-white py-1 px-3 rounded flex items-center hover:bg-blue-600"
                    >
                      <FaEdit className="mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded flex items-center hover:bg-red-600"
                    >
                      <FaTrashAlt className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
