import React from 'react';
import TaskManager from '../components/TaskManager.tsx';

const TaskPage = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-bold text-gray-900 bg-white p-2 rounded-xl shadow-xl bg-opacity-50'>Create, Manage or Delete tasks</h1>
      <TaskManager />
    </div>
  );
};

export default TaskPage;
