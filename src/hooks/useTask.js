import React, { useEffect, useState } from 'react';

const useTask = (id) => {
  const [task, setTask] = useState({});

  const getApiData = async () => {
    const response = await fetch(`http://localhost:13000/api/tasks/${id}`).then(
      (response) => response.json()
    );
    setTask(response);
  };

  useEffect(() => {
    getApiData(id);
  }, []);

  return task;
};

export default useTask;
