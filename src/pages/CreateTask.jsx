import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('user_id', 1);

    fetch(`http://localhost:13000/api/${1}/tasks`, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });
    navigate('/tasks')
  };

  return (
    <div className='App taskManagerBg h-screen justify-center items-center flex'>
      <form
        onSubmit={(data) => handleSubmit(onSubmit)(data)}
        className='py-2 px-4 rounded-xl flex flex-col bg-slate-50 w-1/2 text-xl justify-center items-center'
      >
        <label className='w-full mb-3 pt-3'>
          <span className='w-full text-3xl'>Task Name</span>
        </label>

        <input
          className=' w-full p-[1.5rem] text-[1rem] transition-all focus:text-[1.5rem] focus:-py-[1rem]'
          type='text'
          placeholder='Name'
          {...register('name', { required: true })}
        />
        <button
          type='submit'
          className='text-blue-700 hover:text-orange-500 text-2xl p-2 w-max text-center'
        >
          create
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
