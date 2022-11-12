import React, { useEffect, useState } from 'react';

const useTasks = () => {

	const [tasks, setTasks] = useState([]);

  const getApiData = async () => {
    const response = await fetch('http://localhost:13000/api/1/tasks').then(
      (response) => response.json()
    );
    setTasks(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

	return tasks;
};

export default useTasks;
