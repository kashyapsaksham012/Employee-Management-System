import React, { useEffect, useState } from 'react';

const AllTask = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  return (
    <div className="p-5 mt-5 rounded h-screen overflow-auto bg-[#212121]">
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="mb-8 p-4 rounded border-2 border-emerald-400 bg-transparent"
        >
          {/* Employee Summary */}
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-white">{employee.name}</h2>
            <div className="flex space-x-4 text-sm text-white">
              <div className="px-2 py-1 border border-emerald-400 rounded">
                Active: {employee.taskNumbers.active}
              </div>
              <div className="px-2 py-1 border border-emerald-400 rounded">
                Completed: {employee.taskNumbers.completed}
              </div>
              <div className="px-2 py-1 border border-emerald-400 rounded">
                Failed: {employee.taskNumbers.failed}
              </div>
              <div className="px-2 py-1 border border-emerald-400 rounded">
                New: {employee.taskNumbers.new}
              </div>
            </div>
          </div>

          {/* Employee Tasks */}
          {employee.tasks.map((task, index) => {
            let bgColor = 'bg-transparent';
            if (task.active) bgColor = 'bg-green-400 bg-opacity-20';
            else if (task.completed) bgColor = 'bg-yellow-400 bg-opacity-20';
            else if (task.failed) bgColor = 'bg-red-400 bg-opacity-20';

            return (
              <div
                key={index}
                className={`mb-2 py-2 px-4 flex justify-between items-center border border-emerald-400 rounded ${bgColor} text-white`}
              >
                <span className="font-medium">{task.title}</span>
                <span>
                  {task.active && 'Active'}
                  {task.completed && 'Completed'}
                  {task.failed && 'Failed'}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default AllTask;
    