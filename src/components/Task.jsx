import React from 'react';
import useTask from '../hooks/useTask';
import CheckBox from './CheckBox';

const Task = ({ id }) => {

  const task = useTask(id);

  return (
    <div className='w-full text-center justify-between px-12 items-center flex bg-slate-200 h-16 rounded-full'>
      <span className='text-xl lg:text-2xl'>{task.name}</span>
      <CheckBox task_id={id} />
    </div>
  );
};

export default Task;
