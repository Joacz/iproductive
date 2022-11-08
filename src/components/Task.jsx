import React, { useState } from 'react';
import CheckBox from './CheckBox';

const Task = ({ name, id}) => {
  return (
    <div className='w-full text-center justify-between px-12 items-center flex bg-slate-200 h-16 rounded-full'>
			<span className='text-xl lg:text-2xl'>{name}</span>
			<CheckBox taskId={id} />
    </div>
  );
};

export default Task;
