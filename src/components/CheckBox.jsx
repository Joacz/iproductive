import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import useTask from '../hooks/useTask';

const CheckBox = ({ task_id }) => {
  const [mark, setMark] = useState(false);
  const task = useTask(task_id);

  const check = async () => {
    const formData = new FormData();

    formData.append('id', task_id);
    formData.append('checked', task.checked);
    formData.append('name', task.name);
    formData.append('user_id', task.user_id);

    await fetch(`http://localhost:13000/api/tasks/`, {
      method: 'POST',
      body: formData,
      mode: 'cors',
    });
    window.location.reload();
  };

  const handleMark = () => {
    check();
  };

  return (
    <div
      className='h-10 hover:cursor-pointer select-none w-10 border-2 border-slate-900 rounded-md'
      onClick={() => handleMark()}
    >
      <span className='text-center flex items-center'>
        {task.checked ? <CheckIcon className='h-10 w-10 text-green-500' /> : ''}
      </span>
    </div>
  );
};

export default CheckBox;
