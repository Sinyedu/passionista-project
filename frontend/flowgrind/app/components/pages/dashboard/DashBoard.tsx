import React from "react";
//! This is just placeholder and boilerplate. types, and const functions has to be moved.
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const tasks: Task[] = [
  { id: 1, title: "Finish React dashboard", completed: false },
  { id: 2, title: "Write unit tests", completed: true },
  { id: 3, title: "Push code to repo", completed: false },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Overview of your tasks and progress</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Total Tasks</h2>
          <p className="text-3xl font-bold text-indigo-600">{tasks.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Completed</h2>
          <p className="text-3xl font-bold text-green-500">
            {tasks.filter((t) => t.completed).length}
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Pending</h2>
          <p className="text-3xl font-bold text-red-500">
            {tasks.filter((t) => !t.completed).length}
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tasks</h2>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-4 rounded-lg shadow-sm
                ${task.completed ? "bg-green-50 text-green-700" : "bg-white text-gray-800"}`}
            >
              <span>{task.title}</span>
              {task.completed && (
                <span className="text-sm font-medium bg-green-100 px-2 py-1 rounded-full">
                  Done
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
