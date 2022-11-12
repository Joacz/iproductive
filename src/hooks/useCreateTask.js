import React, { useEffect, useState } from 'react';

const useCreateTask = (data, {user_id}) => {
  const [task, setTask] = useState({});

  const createTask = async (data) => {
    const formData = new FormData();
    formData.append('name', data.task_name);
    formData.append('user_id', data.user_id);

    const response = await fetch(
      `http://localhost:13000/api/${user_id}/tasks`,
      { method: 'POST', mode: 'no-cors', body: formData }
    ).then((response) => response.json());
    setTask(response);
  };

  useEffect(() => {
    createTask();
  }, []);

  return task;
};

export default useCreateTask;
