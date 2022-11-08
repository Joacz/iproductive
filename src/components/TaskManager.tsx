import React from 'react'
import Task from './Task'
import { PlusIcon } from '@heroicons/react/solid'
const TaskManager = () => {
    return (
        <div className='w-full justify-center items-center flex p-8'>
            <div className='w-full lg:w-[50%] flex flex-col'>
                <div className='bg-gray-800 shadow-xl shadow-gray-500 rounded-xl gap-3 flex flex-col p-4 py-12'>
                    <button className='text-white p-1 absolute -m-10 -mt-[4.7rem] rounded-xl text-xl bg-green-500 hover:bg-violet-500 w-max'><PlusIcon className='w-12'/></button>
                    <Task id={1} name="Take out the trash at 7:30" />
                    <Task id={2} name="Study math from 7:40 to 9:00" />
                    <Task id={3} name="Clean my room at 9:30" />
                    <Task id={4} name="Meditate at 10:00" />
                </div>
            </div>
        </div>
    )
}

export default TaskManager