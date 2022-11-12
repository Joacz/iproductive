import React from 'react';
import Task from './Task';

import { PlusIcon } from '@heroicons/react/solid'
import useTasks from '../hooks/useTasks';
const TaskManager = () => {

    const tasks = useTasks();
    return (
        <div className='w-full justify-center items-center flex p-8'>
            <div className='w-full lg:w-[50%] flex flex-col'>
                <div className='bg-gray-800 shadow-xl shadow-gray-500 rounded-xl gap-3 flex flex-col p-4 py-12'>
                    <a href="/createTask" className='text-white p-1 absolute -m-10 -mt-[4.7rem] rounded-xl text-xl bg-green-500 hover:bg-violet-500 w-max'><PlusIcon className='w-12' /></a>
                    {
                        tasks.map((task) => (
                            <Task key={task.name} id={task.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TaskManager;